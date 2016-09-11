var blogQuerier = require("../blogQuerier");

var getTheLastNBlogPostsQuery = (function () {

	return {
		get: function (number) {
			return new Promise(function(resolve, reject) {
				blogQuerier.request(["maxResults=" + number, "orderBy=published"], function (response) {
					resolve(JSON.parse(response));
				});
			});
		}
	}
})();

module.exports = getTheLastNBlogPostsQuery;