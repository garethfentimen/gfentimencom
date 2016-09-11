var db = require('../db'),
	mongoose = require('mongoose'),
	autoIncrement = require('mongoose-auto-increment'),
	Schema = mongoose.Schema;

var blogPostSchema = new Schema({
	title: String,
	content: String,
	published: Date,
	updated: Date,
	labels: [{ type: Number, ref: 'Label' }],
	postId: Number
});

blogSchema.plugin(autoIncrement.plugin, 'BlogPost');

module.exports = mongoose.model('BlogPost', blogPostSchema);