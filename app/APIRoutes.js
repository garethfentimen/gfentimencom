// ROUTES FOR OUR API
// =============================================================================
var express = require('express'); 
var router = express.Router(); 				// get an instance of the express Router

router.use(function(req, res, next) {
	// do logging
	//console.log('Something is happening.');
	next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
router.get('/api', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

router.route('/api/bears')

	// create a bear (accessed at POST http://localhost:3000/api/bears)
	.post(function(req, res) {
		
		
		var bear = new Bear(); 		// create a new instance of the Bear model
		bear.name = req.body.name;  // set the bears name (comes from the request)
		console.log("bear object created? ", bear);
		// save the bear and check for errors
		bear.save(function(err) {
			if (err)
			{
				res.send(err);
			} else {
			   res.json({ message: 'Bear created!' });
			}
		});
		
	})
	
	// get all the bears (accessed at GET http://localhost:8080/api/bears)
	.get(function(req, res) {
		console.log("getting bears");
		Bear.find(function(err, bears) {
			if (err)
			{
				res.send(err);
			} else {
				res.json(bears);
			}
		});
	});
	
// on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.route('/api/bears/:bear_id')
	// get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
	.get(function(req, res) {
		console.log("Getting bear with id:", req.params.bear_id);
		Bear.findById(req.params.bear_id, function(err, bear) {
			if (err)
			{
				res.send(err);
			} else {
				res.json(bear);
			}
		});
	})
	
	// update the bear with this id (accessed at PUT http://localhost:3000/api/bears/:bear_id)
	.put(function(req, res) {

		// use our bear model to find the bear we want
		Bear.findById(req.params.bear_id, function(err, bear) {

			if (err)
				res.send(err);

			bear.name = req.body.name; 	// update the bears info

			// save the bear
			bear.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Bear updated!' });
			});

		});
	})
	
	// delete the bear with this id (accessed at DELETE http://localhost:3000/api/bears/:bear_id)
	.delete(function(req, res) {
		Bear.remove({
			_id: req.params.bear_id
		}, function(err, bear) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});

module.exports = router;