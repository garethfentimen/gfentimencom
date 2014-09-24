var mongoose = require('mongoose');

// Mongo db setup
mongoose.connect('mongodb://gfentimen:IadcqB18@ds045087.mongolab.com:45087/gfentimencom'); //connection string
mongoose.connection.on('error', function(error) {
	console.log(error);
});

module.exports = mongoose.db;