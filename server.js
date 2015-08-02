var express    = require('express'); 		
var app        = express();
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var path = require('path');
var db = require("./app/db");

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

var port = process.env.PORT || 3000; 		// set our port

// API routes
var router = require('./app/apiRoutes');

// App routes
appRoutes = require('./app/appRoutes')(router);
router = appRoutes.addRoutes();

// register all our routes
app.use('/', router);

// Static directories
app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/public', express.static(__dirname + '/public'));
app.use('/libs', express.static(__dirname + '/libs'));

// START THE SERVER
app.listen(port);