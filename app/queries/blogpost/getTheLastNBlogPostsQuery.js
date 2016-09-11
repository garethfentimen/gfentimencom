var bloggerApiLastBlogPostsQuery = require("../../bloggerApiInterface/queries/getTheLastNBlogPostsQuery"),
    blogPostRepository = require("../../repositories/blogPostRepository");

module.exports = (function() {
    return {
		get: function (number) {
		    return bloggerApiLastBlogPostsQuery.get(number);
		}
	}
})();