module.exports = function(router) {

	router.get('/', function(req, res) {
		var data = { title: 'Gareth Fentimen' };
		res.render('home', data);
	});

	router.get('/home', function(req, res) {
		//res.send('im the home page!'); 
		var data = { title: 'Gareth Fentimen' };
		res.render('home', data);
	});

	router.get('/blog', function(req, res) {
		res.render('blog', { scripts: ['libs/lodash/lodash.min.js',
								'libs/angular/angular.min.js',
								'libs/angular-animate/angular-animate.min.js',
								'libs/angular-route/angular-route.min.js',
								'libs/angular-sanitize/angular-sanitize.min.js',
								'libs/restangular/dist/restangular.min.js',
								'scripts/blog.js'] 
					});
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