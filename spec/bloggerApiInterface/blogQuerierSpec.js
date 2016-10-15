var blogQuerier = require("../../app/bloggerApi/blogQuerier"),
    result = "",
    requestParameters = [],
    mockRequire = require("../../node_modules/mock-require/index.js"),
    https = require('https');

mockRequire.stopAll();
mockRequire('https', {
    request: function(options, callback) {},
    end: function() {}
});

beforeEach(function () {
});

describe("When there is one filter given", function () {
    beforeEach(function (done) {
        requestParameters.push("maxResults=10");
        //maxResults=10&singleEvents=true&pageToken=CiAKGjBpNDd2Nmp2Zml2cXRwY

        spyOn(https, "request").and.callFake(function(options, responseCallback) {
            console.log("request made with: ", options);
            if (options.path !== "")
            {   
                responseCallback.on = function(type, callback) {
                    return callback("json data");
                };

                responseCallback.end = function() {
                    result = "json data";
                    done();
                };             
                
                return responseCallback;
            }
        });

        blogQuerier.request(requestParameters, function (response) {
            // could not get into here, because no emit event
        });
    });

    it("Should respond with some json data", function () {
        expect(result).toEqual("json data");
    });
});

