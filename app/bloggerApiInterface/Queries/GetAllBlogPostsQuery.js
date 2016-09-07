var blogQuerier = require("../blogQuerier");

var getAllBlogPostsQuery = (function () {

	return {
		get: function (callback) {

		    blogQuerier.request(["maxResults=3", "orderBy=published"], function (response) {
		        return callback(JSON.parse(response));
			});
		}
	}
})();

module.exports = getAllBlogPostsQuery;