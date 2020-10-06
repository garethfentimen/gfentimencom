var express    = require('express'); 		
var app        = express();
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var path = require('path');
var dotenv = require('dotenv');
const session = require('express-session');
const cookieParser = require('cookie-parser');

async function main () {
  if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
  }
  app.engine('hbs', expressHbs(
    { 
      extname:'hbs', 
      defaultLayout:'main'
    }));

  app.set('view engine', 'hbs');

  var favicon = require('serve-favicon');
  app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

  // configure app to use bodyParser()
  // this will let us get the data from a POST (jsonifying)
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(cookieParser());
  const options = { 
    key: 'gfentimen.sid.uid.abd',
    secret: process.env.COOKIE_SECRET,
    cookie: {
      maxAge: 2678400000 // 31 days
    } };
    console.log(options);
  app.use(session(options));

  var port = process.env.PORT || 3000; 		// set our port

  // API routes
  var router = require('./app/routes/blogApiRoutes');
  router = require("./app/routes/labelApiRoutes.js")(router);
  router = require("./app/routes/appRoutes.js")(router);
  router = require("./app/routes/authRoutes.js")(router);

  // redirect for non-www to www
  app.all(/.*/, function(req, res, next) {
    if (req.headers.host.match(/^www\..*/i)) {
      next();
    } else {
      if (req.hostname.match(/^localhost*/i))
      {
      next();
      } else {
        res.redirect(301, req.protocol + '://www.' + req.header("host"));
      }
    }
  });

  app.set('trust proxy', true);

  // register all our routes
  app.use('/', router);

  // Static directories
  app.use('/scripts', express.static(__dirname + '/scripts'));
  app.use('/public', express.static(__dirname + '/public'));
  app.use('/public/build/img', express.static(__dirname + '/public/img'));

  // START THE SERVER
  app.listen(port, () => console.log(`Server is running on port ${port}!`));
}

main()
  .catch(err => console.error(err.message, err));