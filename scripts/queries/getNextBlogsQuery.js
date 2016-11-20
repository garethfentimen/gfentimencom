angular
    .module('app')
    .service('getNextBlogsService', ['Restangular', function (Restangular) {
        return {
            get: function(nextPageToken, callback) {
                return Restangular.one("posts", 3).one("nextPageToken", nextPageToken).get();
            }
        }
    }]);