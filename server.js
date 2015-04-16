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
	res.render('blog', { scripts: ['libs/lodash/dist/lodash.min.js',
							'libs/angular/angular.min.js',
							'libs/angular-animate/angular-animate.min.js',
							'libs/angular-route/angular-route.min.js',
							'libs/angular-sanitize/angular-sanitize.min.js',
							'libs/restangular/dist/restangular.min.js',
							'scripts/blog.js'] 
				});
});

// about page route (http://localhost:8080/about)
router.get('/about', function(req, res) {
	var data = { title: "About me" };
	res.render('about', data);	
});

router.get('/contact', function(req, res) {
	res.render('contact', { 
			title: "Contact me"			
		});
});

// register all our routes
app.use('/', router);

app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/public', express.static(__dirname + '/public'));
app.use('/libs', express.static(__dirname + '/libs'));

// START THE SERVER
app.listen(port);