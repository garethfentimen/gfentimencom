var bloggerApiLastBlogPostsQuery = require("../../bloggerApiInterface/queries/getTheLastNBlogPostsQuery"),
    blogPostRepository = require("../../repositories/blogPostRepository");

module.exports = (function() {
    return {
		get: function (number) {
		    bloggerApiLastBlogPostsQuery.get(number).then(function(result) {
                
            });
		}
	}
})();