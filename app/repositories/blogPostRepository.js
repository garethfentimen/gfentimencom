var blogEntity = require("../models/blogpost");

var blogRepository = function() {
};

blogRepository.prototype = function() {

	var findBlog = function(blog) {
		return new Promise(function(resolve, reject) {
			blogEntity.findOne({ 'title': blog.title }, function (err, blog) {
		  		if (err) 
	  			{
	  				resolve({ 
			  			Success : false, 
			  			Message : "There was a fault when querying the mongo db" + err 
			  		});
		  		}
		  		return resolve({ 
					  Success: true, 
					  Blog: blog 
					});
			});
		});
	}

	var saveBlog = function(blog) {
		return new Promise(function(resolve, reject) {
			var findresult = findBlog(blog).then(function(findresult) {
				if (findresult.Success && findresult.Blog !== null || findresult.Blog !== undefined)
				{
					resolve({ Success: true, Blog: findresult.Blog });
				} 

				if (!findresult.Success && findresult.Message !== '')
				{
					resolve(findresult);
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
					resolve({ Success: false, Message: "Problem saving blog to mongo db: " + err });	
				}
			});
		});
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