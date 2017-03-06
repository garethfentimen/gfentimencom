var parameterValidation = require("../../app/apiValidation/parameters"),
    result,
    res = {};

beforeEach(function() {
    res.status = function(statusType) {
            return {
                json: function() {
                   //console.log("returned some json"); 
                }
            }
        };
    spyOn(res, "status").and.callThrough();
});

describe("When an invalid number is provided", function() {
    beforeEach(function() {
        var req = {
            params: { number: "aaa" }
        };

        result = parameterValidation.checkNumber(req, res, "number");
    });

    it("Should have called the API to report an error", function() {
        expect(res.status).toHaveBeenCalled();
    });

    it("Should not return anything", function() {
        expect(isNaN(result)).toBe(true);
    });
});

describe("When no parameter name is provided", function() {
    beforeEach(function() {
        var req = {
            params: { number: "3" }
        };

        result = parameterValidation.checkNumber(req, res);
    });

    it("Should not have called the API to report an error", function() {
        expect(res.status).not.toHaveBeenCalled();
    });

    it("Should assume that it is number parameter", function() {
        expect(result).toBe(3);
    });
});

describe("When an valid number is provided", function() {
    beforeEach(function() {
        var req = {
            params: { number: "3" }
        };

        result = parameterValidation.checkNumber(req, {}, "number");
    });

    it("Should have return a valid number", function() {
        expect(result).toBe(3);
    });
});