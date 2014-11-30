// app/models/blog.js

var mongoose = require('mongoose'),
	autoIncrement = require('mongoose-auto-increment'),
	Schema = mongoose.Schema;

var blogSchema = new Schema({
	title: String
});

blogSchema.plugin(autoIncrement.plugin, 'Blog');
module.exports = mongoose.model('Blog', blogSchema);