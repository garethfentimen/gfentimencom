var db = require('../db'),
	mongoose = require('mongoose'),
	autoIncrement = require('mongoose-auto-increment'),
	Schema = mongoose.Schema;

var labelSchema = new Schema({
	name: String
});

labelSchema.plugin(autoIncrement.plugin, 
					{ 
						model: 'Label',
					  	field: 'labelId'
					});

module.exports = mongoose.model('Label', labelSchema);