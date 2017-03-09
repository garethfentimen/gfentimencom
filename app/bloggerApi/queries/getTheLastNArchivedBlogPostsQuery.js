var blogQuerier = require("../blogQuerier"),
    blogFields = require("../queryUtils/blogFields");

module.exports = function () {
    return {
		get: function (number, year, nextPageToken) {
			return new Promise(function(resolve, reject) {
				var filter = [];
				
				filter.push("maxResults=" + number);
				filter.push("orderBy=published");

				if (nextPageToken)
				{
					filter.push("pageToken=" + nextPageToken);
				}

				filter.push("startDate=" + year + encodeURIComponent("-01-01T00:00:00Z"));
				filter.push("endDate=" + (year + 1) + encodeURIComponent("-01-01T00:00:00Z"));

				filter.push(blogFields.generate("id,published,title", "nextPageToken"));

				blogQuerier.request(filter, null, function (response) {
					resolve(JSON.parse(response));
				});
			});
		}
	}
}();