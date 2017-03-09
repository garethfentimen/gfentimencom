module.exports = function () {
    
    return {
        generate : function(subItemFields, fields) {
            if (!fields && !subItemFields) {
                return "";
            }

            var subItemFieldparams = "",
                subItemFields = subItemFields ? subItemFields.split(",") : "";

            for (var i = 0; i < subItemFields.length; i++) {
                var field = subItemFields[i].trim();
                if (i + 1 == subItemFields.length) {
                    subItemFieldparams += field;
                } else {
                    subItemFieldparams += field + ",";
                }
            }

            var params = "",
                fieldParams = fields ? fields.split(",") : "";

            for (var i = 0; i < fieldParams.length; i++) {
                var field = fieldParams[i].trim();
                if (i + 1 == fieldParams.length) {
                    params += field;
                } else {
                    params += field + ",";
                }
            }

            var blogFieldsString = "";
            if (subItemFieldparams.length > 0) {
                blogFieldsString = "fields=items(" + encodeURIComponent(subItemFieldparams) + ")";
            }

            if (params.length > 0)
            {
                if (blogFieldsString !== "" && subItemFieldparams.length > 0)
                {
                    // must already have subItems
                    blogFieldsString += encodeURIComponent("," + params);
                } else {
                    blogFieldsString += "fields=" + encodeURIComponent(params);
                }
            }

            return blogFieldsString;
        }
    };
}();