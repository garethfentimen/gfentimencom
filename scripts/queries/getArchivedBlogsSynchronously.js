angular
    .module('app')
    .service('getArchivedBlogsSynchronously', ['Restangular', function (Restangular) {
        return {
            get: function(year, nextPageToken) {
                if (nextPageToken) {
                    return Restangular.one("archivedposts", 3).one("year", year).one("nextPageToken", nextPageToken).get();
                } else {
                    return Restangular.one("archivedposts", 3).one("year", year).get();    
                }
            }
        }
    }]);