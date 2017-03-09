var httpStatus = require('../httpStatus');

module.exports = function () {
    return { 
        checkNumber: function(req, res, parameterName) {
            if (!parameterName) { 
                parameterName = "number"; 
            }
            
            var number = req.params[parameterName];
            if (number >= Number.MAX_SAFE_INTEGER) 
            {
                return number;
            }

            var numberToRetrieve = parseInt(number);
            if (numberToRetrieve === undefined || isNaN(numberToRetrieve))
            {
                res.status(httpStatus.BAD_REQUEST).json({ "message": "Please specifiy the number of blogs to retrieve"});
            }
            return numberToRetrieve;
        },
        checkYear: function(req, res, parameterName) {
            if (!parameterName) { 
                parameterName = "year"; 
            }

            return this.checkNumber(req, res, parameterName);
        }
    }
}();