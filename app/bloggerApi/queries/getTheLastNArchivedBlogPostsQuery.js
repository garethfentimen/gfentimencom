var blogQuerier = require("../blogQuerier");

var getTheLastNArchivedBlogPostsQuery = function () {
    return {
		get: function (number, nextPageToken) {
			return new Promise(function(resolve, reject) {
				
				var filter = [];
				
				filter.push("maxResults=" + number);
				if (nextPageToken != undefined)
				{
					filter.push("pageToken=" + nextPageToken);
				}

				filter.push("orderBy=published");
				blogQuerier.request(filter, function (response) {
					resolve(JSON.parse(response));
				});
			});
		}
	}
};

module.exports = getTheLastNArchivedBlogPostsQuery;