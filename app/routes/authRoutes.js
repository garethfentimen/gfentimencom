const keys = require("../config/keys");
const {
    getOAuthRequestToken,
    getOAuthAccessTokenWith,
    oauthGetUserById
  } = require('../config/oauth');
const data = require('afcm_data');

module.exports = function(router) {
    router.get('/ffo', async (req, res) => {
      console.log('/ req.cookies', req.cookies)
      if (req.cookies && req.cookies.twitter_screen_name) {
        console.log('/ authorized', req.cookies.twitter_screen_name);
        return res.render('ffo', {
          title: 'Fantasy Football Owner', 
          year: new Date().getUTCFullYear(),
          name: req.cookies.twitter_screen_name
        });
      }
      return res.render('login', {
        title: 'Fantasy Football Owner',
        year: new Date().getUTCFullYear(),
        name: req.cookies.twitter_screen_name
      });
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
    
        const { user_id: userId /*, screen_name */ } = results
        const user = await oauthGetUserById(userId, { oauthAccessToken, oauthAccessTokenSecret })
    
        req.session.twitter_screen_name = user.screen_name
        res.cookie('twitter_screen_name', user.screen_name, { maxAge: 900000, httpOnly: true })
    
        console.log('user succesfully logged in with twitter', user.screen_name);
        req.session.save(() => res.redirect('/ffo'));
      })

    return router;
};