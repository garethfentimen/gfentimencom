var express    = require('express'); 		
var app        = express();
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var path = require('path');

app.engine('hbs', expressHbs({extname:'hbs', defaultLayout:'main'}));
app.set('view engine', 'hbs');

var favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

var db = require('./config/db');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000; 		// set our port

// API routes
var router = require('./app/APIRoutes');


// home page route (http://localhost:3000)
router.get('/', function(req, res) {
	//res.send('im the home page!');
	var data = { title: 'Gareth Fentimen' };
	res.render('home', data);
});

router.get('/home', function(req, res) {
	//res.send('im the home page!');
	var data = { title: 'Gareth Fentimen' };
	res.render('home', data);
});

router.get('/blog', function(req, res) {
	res.render('blog', {});
});

// about page route (http://localhost:8080/about)
router.get('/about', function(req, res) {
	var data = { title: "I'm the about page!" };
	res.render('about', data);	
});

// register all our routes
app.use('/', router);

app.use(express.static(__dirname + '/public'));

// START THE SERVER
// =============================================================================
app.listen(port);