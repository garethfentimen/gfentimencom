var generateBlogFields = require("../../app/bloggerApi/queryUtils/blogFields.js"),
    result = {};

describe("When there are no blog fields sent", function () {
    it("Should respond with empty string", function () {
        result = generateBlogFields.generate(undefined);
        expect(result).toEqual("");
    });

    it("Should respond with empty string", function () {
        result = generateBlogFields.generate(null);
        expect(result).toEqual("");
    });

    it("Should respond with empty string", function () {
        result = generateBlogFields.generate("");
        expect(result).toEqual("");
    });
});

describe("When there is one blog field", function () {
    it("Should respond with empty string", function () {
        result = generateBlogFields.generate("blog");
        expect(result).toEqual("fields=items(blog)");
    });
});

describe("When there are two blog fields", function () {
    it("Should respond with empty string", function () {
        result = generateBlogFields.generate("blog, published");
        expect(result).toEqual("fields=items(blog%2Cpublished)");
    });
});