var blogQuerier = require("../blogQuerier");

var getAllBlogsQuery = (function () {

	return {
		get: function (callback) {

		    blogQuerier.request(["maxResults=3", "orderBy=published"], function (response) {
		        return callback(JSON.parse(response).items);
			});
		}
	}
})();

module.exports = getAllBlogsQuery;