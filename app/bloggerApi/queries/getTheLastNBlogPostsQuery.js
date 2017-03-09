var blogQuerier = require("../blogQuerier");

module.exports = function () {
	return {
		get: function (number, nextPageToken) {
			return new Promise(function(resolve, reject) {
				
				var filter = [];
				
				filter.push("maxResults=" + number);
				if (nextPageToken)
				{
					filter.push("pageToken=" + nextPageToken);
				}

				filter.push("orderBy=published");
				blogQuerier.request(filter, null, function (response) {
					resolve(JSON.parse(response));
				});
			});
		}
	}
}();