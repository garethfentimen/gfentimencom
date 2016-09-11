var hasBlogPostBeenUpdatedQuery = require("../app/queries/blogpost/hasBlogPostBeenUpdatedQuery"),
    result = true;

beforeEach(function () {
    Date.prototype.addDays = function (days) {
        var dat = new Date(this.valueOf());
        dat.setDate(dat.getDate() + days);
        return dat;
    }
});

describe("When there are no dates given", function() {
    beforeEach(function() {
        result = hasBlogPostBeenUpdatedQuery.isUpdated();
    });
    
    it("Should be false", function() {
        expect(result).toEqual(false);
    });
});

describe("When the api is newer", function () {
    beforeEach(function () {
        var now = new Date(Date.now());
        var apiUpdatedDate = now.addDays(-2);
        var localUpdatedDate = now.addDays(-6);
        result = hasBlogPostBeenUpdatedQuery.isUpdated(apiUpdatedDate, localUpdatedDate);
    });

    it("Should be true", function () {
        expect(result).toEqual(true);
    });
});

describe("When the database is up to date", function () {
    beforeEach(function () {
        var now = new Date(Date.now());
        var apiUpdatedDate = now.addDays(-2);
        var localUpdatedDate = now.addDays(-2);
        result = hasBlogPostBeenUpdatedQuery.isUpdated(apiUpdatedDate, localUpdatedDate);
    });

    it("Should be false as they were updated at the same time", function () {
        expect(result).toEqual(false);
    });
});