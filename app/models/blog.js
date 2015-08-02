// app/models/blog.js

var db = require('../db'),
	mongoose = require('mongoose'),
	autoIncrement = require('mongoose-auto-increment'),
	Schema = mongoose.Schema;

var blogSchema = new Schema({
	title: String,
	published: Date,
	content: String
});

blogSchema.plugin(autoIncrement.plugin, 
					{ 
						model: 'Blog',
					  	field: 'blogId'
					});

module.exports = mongoose.model('Blog', blogSchema);