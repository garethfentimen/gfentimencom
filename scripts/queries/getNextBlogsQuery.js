angular
    .module('app')
    .service('getNextBlogsService', ['Restangular', function (Restangular) {
        return {
            get: function(nextPageToken) {
                return Restangular.one("posts", 3).one("nextPageToken", nextPageToken).get(function (result) {
                    console.log("ok I am running the next page query");
                    return result;
                });
            }
        }
    }]);