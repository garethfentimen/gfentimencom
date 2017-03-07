var blogQuerier = require("../blogQuerier"),
    blogFields = require("../queryUtils/blogFields");

module.exports = function () {
    return {
		get: function (number, year, nextPageToken) {
			return new Promise(function(resolve, reject) {
				var filter = [];
				
				filter.push("maxResults=" + number);
				if (nextPageToken !== undefined)
				{
					filter.push("pageToken=" + nextPageToken);
				}

				filter.push("startDate=" + year + encodeURIComponent("-01-01T00:00:00Z"));
				filter.push("endDate=" + (year + 1) + encodeURIComponent("-01-01T00:00:00Z"));

				filter.push(blogFields.generate("blog,published,title"));

				filter.push("orderBy=published");

				blogQuerier.request(filter, function (response) {
					resolve(JSON.parse(response));
				});
			});
		}
	}
}();