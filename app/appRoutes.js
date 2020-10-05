
module.exports = function(router) {
	var standardServerData = function (aTitle) {
		if (!aTitle)
		{
			aTitle = 'Gareth Fentimen - Software Developer';
		}

		return {
			title: aTitle, 
			year: new Date().getUTCFullYear()
		}
	}

	router.get('/', function(req, res) {
		res.render('home', standardServerData());
	});

	router.get('/home', function(req, res) {
		res.render('home', standardServerData());
	});

	router.get('/blog', function(req, res) {
		var data = standardServerData();
		data.scripts = [
			'public/build/scripts/dep.min.js', 
			'public/build/scripts/app.min.js'
		];
		res.render('blog', data);
	});

	router.get('/about', function(req, res) {
		res.render('about', standardServerData());	
	});

	router.get('/contact', function(req, res) {
		res.render('contact', standardServerData("Contact me"));
	});

	return router;
};