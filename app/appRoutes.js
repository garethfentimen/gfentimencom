module.exports = function(router) {

	var basicDependencies = ['libs/angular/angular.min.js',
								'libs/angular-ui-bootstrap-bower/ui-bootstrap.min.js',
								'libs/angular-route/angular-route.min.js',
								'libs/angular-sanitize/angular-sanitize.min.js'];

	extraSpaDependencies = ['libs/angular-animate/angular-animate.min.js',
							'libs/restangular/dist/restangular.min.js']

	appScripts = ['scripts/blog.js'];

	function unionArrays(arrayToBeAddedTo, arrayToAppend, arrayToAppend2) {
		for (var value in arrayToAppend)
		{
			arrayToBeAddedTo.push(value);
		}

		for (var value in arrayToAppend)
		{
			arrayToBeAddedTo.push(value);
		}
		return arrayToBeAddedTo;
	}

	var completeSet = unionArrays(extraSpaDependencies, basicDependencies, appScripts);

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
		res.render('blog', { scripts: completeSet
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