var express    = require('express'); 		
var app        = express();
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var path = require('path');

app.engine('hbs', expressHbs(
	{ 
		extname:'hbs', 
		defaultLayout:'main'
	}));

app.set('view engine', 'hbs');

var favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

var db = require('./config/db');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000; 		// set our port

// API routes
var router = require('./app/APIRoutes');
router = require("./app/appRoutes.js")(router);

// redirect for www to non-www
app.all('/*', function(req, res, next) {
  if (req.headers.host.match(/^www\./) !== null) {
    res.redirect(301, req.protocol + '://' + req.headers.host.replace(/^www\./, '') + req.url);
  } else {
    next();     
  }
})

app.set('trust proxy', true);

// register all our routes
app.use('/', router);

app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/public', express.static(__dirname + '/public'));
app.use('/libs', express.static(__dirname + '/libs'));

// START THE SERVER
app.listen(port);