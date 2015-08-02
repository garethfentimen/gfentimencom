var blogEntity = require("../models/blog");

var blogRepository = function() {
};

blogRepository.prototype = function() {

	var findBlog = function(blog) {
		if (blog)
		{
			blogEntity.findOne({ 'title': blog.title }, function (err, blog) {
		  		if (err) 
	  			{
	  				return { 
			  			Success : false, 
			  			Message : "There was a fault when querying the mongo db" + err 
			  		};
		  		}
		  		return { Success: true, Blog: blog };
			})
		}
	};

	var saveBlog = function(blog) {
		if (blog)
		{
			var findresult = findBlog(blog);
			if (findresult.Success)
			{
				return findresult;
			} else {
				if (findresult.Message != '')
				{
					return findresult;
				}
				
				try
				{
					var newBlog = new blogEntity();
					newBlog.title = blog.title;
					newBlog.published = blog.published;
					newBlog.content = blog.content;
					newBlog.Save();
				}
				catch (err)
				{
					return { Success: false, Message: "Problem saving blog to mongo db: " + err };	
				}
			}
		}
	};

	var saveBlogs = function (blogs) {
		if (blogs === null || blogs.length === 0)
		{
			return { Success: false, Message: "The blogs array was empty. No action was performed." };
		}

		var resultOfOperation = [];
		for (var i=0, j=blogs.length; i<j; i++)
		{
			resultOfOperation.push(this.saveBlog(blogs[i]));
		}

		return resultOfOperation;
	};

	var findBlogById = function(id) {
		//console.log("I am here with an id", id);

		blogEntity.findOne({ 'blogId': id }, function (err, blog) {
		  		if (err) 
	  			{
	  				return { 
			  			Success : false, 
			  			Message : "There was a fault when querying the mongo db with id: " + id + ". Error:" + err
			  		};
		  		}
		  		return { Success: true, Blog: blog };
			})
	};

	return {
		saveBlogs: saveBlogs,
		getBlogById: findBlogById
	}	
}();

module.exports = blogRepository;