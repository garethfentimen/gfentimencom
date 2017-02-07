module.exports = function () {
    return { 
        check: function(req, res) {
            var numberToRetrieve = req.params.number;
            if (numberToRetrieve === undefined)
            {
                res.status(httpStatus.BAD_REQUEST).json({ "message": "Please specifiy the number of blogs to retrieve"});
            }
            return numberToRetrieve;
        }
    }
};