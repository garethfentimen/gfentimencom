
module.exports = function(router) {
	var standardServerData = function (aTitle) {
		if (!aTitle)
		{
			aTitle = 'Gareth Fentimen - Software Developer';
		}

		return {
			title: aTitle, 
			year: new Date().getUTCFullYear(),
			notFfo: true
		}
	}
	
	router.get("/", (req, res) => {
        res.render('about', standardServerData());
    });

	router.get('/about', function(req, res) {
		res.render('about', standardServerData());	
	});

	router.get('/blog', function(req, res) {
		var data = standardServerData();
		data.scripts = [
			'public/build/scripts/dep.min.js', 
			'public/build/scripts/app.min.js'
		];
		res.render('blog', data);
	});

	return router;
};