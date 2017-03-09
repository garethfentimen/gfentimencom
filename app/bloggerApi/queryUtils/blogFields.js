module.exports = function () {
    
    return {
        generate : function(fields, isPosts) {
            if (!fields) {
                return "";
            }

            var params = "",
                fieldParams = fields.split(",");

            for (var i = 0; i < fieldParams.length; i++) {
                var field = fieldParams[i].trim();
                if (i + 1 == fieldParams.length) {
                    params += field;
                } else {
                    params += field + ",";
                }
            }

            if (isPosts) {
                return "fields=" + encodeURIComponent(params);
            } else {
                return "fields=items(" + encodeURIComponent(params) + ")";
            }
        }
    };
}();