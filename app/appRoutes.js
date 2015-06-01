module.exports = function(router) {

	var allDependencies = ['libs/angular/angular.min.js',
								'libs/angular-ui-bootstrap-bower/ui-bootstrap.min.js',
								'libs/angular-route/angular-route.min.js',
								'libs/angular-sanitize/angular-sanitize.min.js',
								'libs/angular-animate/angular-animate.min.js',
								'libs/restangular/dist/restangular.min.js',
								'libs/lodash/lodash.min.js',
								'libs/angular-loading-bar/build/loading-bar.min.js',
								'scripts/build/app.min.js'];

	router.get('/', function(req, res) {
		var data = { title: 'Gareth Fentimen' };
		res.render('home', data);
	});

	router.get('/home', function(req, res) {
		var data = { title: 'Gareth Fentimen' };
		res.render('home', data);
	});

	router.get('/blog', function(req, res) {
		res.render('blog', { scripts: allDependencies });
	});

	router.get('/about', function(req, res) {
		var data = { title: "About me" };
		res.render('about', data);	
	});

	router.get('/contact', function(req, res) {
		res.render('contact', { 
				title: "Contact me"			
			});
	});

	return router;
};