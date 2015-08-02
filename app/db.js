var mongoose = require('mongoose'),
	autoIncrement = require('mongoose-auto-increment');

// Mongo db setup
var connection = mongoose.createConnection('mongodb://gfentimen:IadcqB18@ds045087.mongolab.com:45087/gfentimencom'); //connection string
mongoose.connection.on('error', function(error) {
	console.log(error);
});

autoIncrement.initialize(connection);

module.exports = mongoose.db;