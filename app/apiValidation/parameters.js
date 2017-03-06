var httpStatus = require('../httpStatus');

module.exports = function () {
    return { 
        checkNumber: function(req, res, parameterName) {
            var numberToRetrieve = parseInt(req.params[parameterName]);
            if (numberToRetrieve === undefined || isNaN(numberToRetrieve))
            {
                res.status(httpStatus.BAD_REQUEST).json({ "message": "Please specifiy the number of blogs to retrieve"});
            }
            return numberToRetrieve;
        }
    }
}();