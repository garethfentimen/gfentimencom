var https = require('https');

module.exports = function () {
    var apiKey = "&key=" + process.env.googleBloggerAPIKey;

    var blogUrl = function (requestParameters, postId) {
        var blogId = "3311430580289688408";

        var params = "",
            noParams = requestParameters.length,
            questionIfHasParams = noParams > 0 ? "?" : "";

        for (var i = 0; i < noParams; i++) {
            params += requestParameters[i];
            if (i < (noParams - 1))
            {
                params += "&";
            }
        }

        if (postId) {
            return '/blogger/v3/blogs/' + blogId + '/posts/' + postId + questionIfHasParams + params + apiKey;
        } else {
            return '/blogger/v3/blogs/' + blogId + '/posts' + questionIfHasParams + params + apiKey;
        }
    };

    return {
        request: function (requestParameters, postId, callback) {

            var options = {
                host: 'www.googleapis.com',
                path: blogUrl(requestParameters, postId),
                port: 443,
                method: "GET",
                headers: {
                    "referer": "www.gfentimen.com/blog"
                }
            };

            //console.log("path: ", options.path);
            https.request(options, function (response) {
                var str = '';

                //another chunk of data has been recieved, so append it to `str`
                response.on('data', function (chunk) {
                    str += chunk;
                });

                //the whole response has been recieved, so we just print it out here
                response.on('end', function () {
                    return callback(str);
                });
            }).end();
        }
    }
}();