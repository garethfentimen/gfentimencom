var blogQuerier = require("../../blogQuerier"),
    blogFields = require("../../queryUtils/blogFields");

module.exports = function () {
    return {
		get: function (id) {
			return new Promise(function(resolve, reject) {
				var filter = [];

				filter.push(blogFields.generate("", "content,id,published,title"));
                
				blogQuerier.request(filter, id, function (response) {
					resolve(JSON.parse(response));
				});
			});
		}
	}
}();