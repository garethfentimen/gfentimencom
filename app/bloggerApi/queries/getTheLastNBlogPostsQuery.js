var blogQuerier = require("../blogQuerier");

var getTheLastNBlogPostsQuery = (function () {

	return {
		get: function (number, nextPageToken) {
			return new Promise(function(resolve, reject) {
				
				var filter = new [];
				console.log("filter: ", filter);
				
				filter.push("maxResults=" + number);
				if (nextPageToken != undefined)
				{
					filter.push("pageToken=" + nextPageToken);
				}

				console.log("filter: ", filter[0]);
				blogQuerier.request([filter, "orderBy=published"], function (response) {
					resolve(JSON.parse(response));
				});
			});
		}
	}
})();

module.exports = getTheLastNBlogPostsQuery;