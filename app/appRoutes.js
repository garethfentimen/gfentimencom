module.exports = function(router) {
	var fs = require("fs");

	router.get('/', function(req, res) {
		var data = { title: 'Gareth Fentimen' };
		res.render('home', data);
	});

	router.get('/home', function(req, res) {
		var data = { title: 'Gareth Fentimen' };
		res.render('home', data);
	});

	router.get('/blog', function(req, res) {
		res.render('blog', { 
			scripts:  ['public/build/scripts/dep.min.js', 'public/build/scripts/app.min.js']
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