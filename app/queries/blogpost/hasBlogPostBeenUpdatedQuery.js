module.exports = (function() {
    return {
        isUpdated: function (apiUpdatedDate, localUpdatedDate) {
            if (apiUpdatedDate == null || localUpdatedDate == null) {
                return false;
            }

            if (apiUpdatedDate > localUpdatedDate) {
                return true;
            }

            return false;                
		}
	}
})();