var blogQuerier = require("../../app/bloggerApi/blogQuerier"),
    result = {},
    requestParameters = [],
    mockRequire = require("../../node_modules/mock-require/index.js"),
    https = require('https');

mockRequire.stopAll();
mockRequire('https', {
    request: function(options, callback) {},
    end: function() {}
});

describe("When there is one filter given", function () {
    beforeEach(function (done) {
        requestParameters = ["maxResults=10"];

        spyOn(https, "request").and.callFake(function(options, responseCallback) {
            result.options = options;
            if (options.path !== "")
            {   
                responseCallback.on = function(type, callback) {};

                responseCallback.end = function() {
                    result.str = "json data";
                    done();
                };             
                
                return responseCallback;
            }
        });

        blogQuerier.request(requestParameters, function (response) {
            // could not get into here, because no emit event
        });
    });

    it("Should respond with some json data because the path was not empty", function () {
        expect(result.str).toEqual("json data");
    });

    it("Should have created a valid request path", function () {
        expect(result.options).not.toEqual(undefined);
        expect(result.options.path).toEqual("/blogger/v3/blogs/3311430580289688408/posts?maxResults=10&key=undefined");
    });
});

describe("When there are two filters given", function () {
    beforeEach(function (done) {
        requestParameters = ["maxResults=10","pageToken=CiAKGjBpNDd2Nmp2Zml2cXRwY"];

        spyOn(https, "request").and.callFake(function(options, responseCallback) {
            result.options = options;
            if (options.path !== "")
            {   
                responseCallback.on = function(type, callback) {
                    return callback("json data");
                };

                responseCallback.end = function() {
                    result.str = "json data";
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
        expect(result.str).toEqual("json data");
    });

    it("Should have created a valid request path", function () {
        expect(result.options).not.toEqual(undefined);
        expect(result.options.path).toEqual("/blogger/v3/blogs/3311430580289688408/posts?maxResults=10&pageToken=CiAKGjBpNDd2Nmp2Zml2cXRwY&key=undefined");
    });
});