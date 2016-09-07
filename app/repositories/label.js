var Label = require("../models/label");
var httpStatus = require("../httpStatus");

var labelRepository = (function () {

    var getLabelById = function(id) {
        return new Promise(function(resolve, reject) {
            Label.findById(id, function (err, label) {
                if (err !== null) {
                    return resolve({ status: httpStatus.INTERNAL_SERVER_ERROR, message: "DB Error: " + err });
                }
                if (label == null || label._id !== id) {
                    return resolve({ status: httpStatus.NOT_FOUND, message: "Unable to find advert: " + id });
                }
                return resolve({ status: httpStatus.CREATED, label });
            });
        });
    }

    var getLabelByName = function(name) {
        return new Promise(function(resolve, reject) {
            Label.where('name').equals(name)
                .exec(function(result) {
                    resolve(result);
                });
        });
    }

    var saveLabel = function(label) {
        return new Promise(function(resolve, reject) {
            var newLabel = new Label();
            newLabel.name = label.name;
            newLabel.save((error) => {
                if (error) {
                    return reject({ status: httpStatus.INTERNAL_SERVER_ERROR, message: error });
                }
                
                return resolve({ status: httpStatus.CREATED, label: newLabel });
            });
        });
    }

    return {
        getById : function(id) {
            return getLabelById(id);
        },
        getByName : function(name) {
            return getLabelByName(name);
        },
        save: function(label) {
            return new Promise(function(resolve, reject) {
                if (label.name === undefined || label.name === null)
                {
                    resolve(false);
                }
                // name must be unique
                if (this.getByName(label.name) != null)
                {
                    resolve(false);
                }

                saveLabel(label).then(function(result) {
                    resolve(result);
                }).catch(function(reasonObj) {
                    resolve(reasonObj);
                });
            });
        }
    }
})();

module.exports = labelRepository;