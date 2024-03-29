const {
    getOAuthRequestToken,
    getOAuthAccessTokenWith,
    oauthGetUserById
  } = require('../config/oauth');
const path = require('path');
const getToken = require('../queries/auth/getToken');

module.exports = function(router) {
    router.get('/ffo', async (req, res) => {
      console.log('/ req.cookies', req.cookies);
      if ((req.cookies && req.cookies.token) || process.env.NODE_ENV !== "production") {
        console.log('/ authorized', req.cookies.token);
        return res.sendFile(path.join(__dirname + '../../../public/client/index.html'));
      }
      else {
        return res.render('login', {
          title: 'Fantasy Football Owner',
          year: new Date().getUTCFullYear()
        });
      }
    });

    router.get('/twitter/logout', logout);
    function logout (req, res, next) {
        res.clearCookie('twitter_screen_name')
        req.session.destroy(() => res.redirect('/'))
    }

    router.get('/twitter/authenticate', twitter('authenticate'));
    router.get('/twitter/authorize', twitter('authorize'));
    
    function twitter (method = 'authorize') {
        return async (req, res) => {
            console.log(`/twitter/${method}`);
            const { oauthRequestToken, oauthRequestTokenSecret } = await getOAuthRequestToken();
            console.log(`/twitter/${method} ->`, { oauthRequestToken, oauthRequestTokenSecret });

            req.session = req.session || {};
            req.session.oauthRequestToken = oauthRequestToken;
            req.session.oauthRequestTokenSecret = oauthRequestTokenSecret;

            const authorizationUrl = `https://api.twitter.com/oauth/${method}?oauth_token=${oauthRequestToken}`;
            console.log('redirecting user to ', authorizationUrl);
            res.redirect(authorizationUrl);
        }
    }

    router.get('/twitter/callback', async (req, res) => {
        const { oauthRequestToken, oauthRequestTokenSecret } = req.session
        const { oauth_verifier: oauthVerifier } = req.query
        console.log('/twitter/callback', { oauthRequestToken, oauthRequestTokenSecret, oauthVerifier })
    
        const { oauthAccessToken, oauthAccessTokenSecret, results } = await getOAuthAccessTokenWith({ oauthRequestToken, oauthRequestTokenSecret, oauthVerifier })
        req.session.oauthAccessToken = oauthAccessToken
    
        const { screen_name, user_id } = results;
        const user = await oauthGetUserById(user_id, { oauthAccessToken, oauthAccessTokenSecret });
        
        const userToSend = { 
          userId: user_id,
          screenName: screen_name,
          name: user.name,
          location: user.location,
          description: user.description,
          followers: user.followers_count
        };
        console.log('user succesfully logged in - sending this info: ', userToSend);

        // need the JWT
        const token = await getToken(userToSend);
        res.cookie('token', token, { maxAge: 86400 * 2 });

        req.session.save(() => res.redirect('/ffo'));
      })

    return router;
};