var https = require('https');

var blogQuerier = (function () {
    if (process.env.googleBloggerAPIKey === undefined) {
        //process.env.googleBloggerAPIKey = "AIzaSyCuMRBJYqqUyEYceE4zyZahLAjCLipOqWk";
    }

    var apiKey = "key=" + process.env.googleBloggerAPIKey;

    var blogUrl = function (requestParameters) {
        var blogId = "3311430580289688408";

        var params = "";
        var noParams = requestParameters.length;
        for (var i = 0; i < noParams; i++) {
            params += requestParameters[i] + "&";
        }

        return '/blogger/v3/blogs/' + blogId + '/posts?' + params + apiKey;
    };

    return {
        request: function (requestParameters, callback) {

            var options = {
                host: 'www.googleapis.com',
                path: blogUrl(requestParameters),
                port: 443,
                method: "GET"
            };

            https.request(options, function (response) {
                var str = '';

                //another chunk of data has been recieved, so append it to `str`
                response.on('data', function (chunk) {
                    str += chunk;
                });

                //the whole response has been recieved, so we just print it out here
                response.on('end', function () {
                    callback(str);
                });
            }).end();
        }
    }
})();

module.exports = blogQuerier;