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

    it("Should respond with empty string and there are no fields requested", function () {
        result = generateBlogFields.generate("", "");
        expect(result).toEqual("");
    });
});

describe("When there is one item sub field", function () {
    it("Should respond with one sub field", function () {
        result = generateBlogFields.generate("blog", null);
        expect(result).toEqual("fields=items(blog)");
    });
});

describe("When there is no item sub field and there is one blog field", function () {
    it("Should respond with empty string", function () {
        result = generateBlogFields.generate(null, "blog");
        expect(result).toEqual("fields=blog");
    });
});

describe("When there are two item sub fields", function () {
    it("Should respond with item sub fields", function () {
        result = generateBlogFields.generate("blog, published");
        expect(result).toEqual("fields=items(blog%2Cpublished)");
    });
});

describe("When there are two item sub fields and there is one blog field", function () {
    it("Should respond with item sub fields and blog fields", function () {
        result = generateBlogFields.generate("blog, published", "nextPageToken");
        expect(result).toEqual("fields=items(blog%2Cpublished)%2CnextPageToken");
    });
});