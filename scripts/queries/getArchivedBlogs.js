angular
    .module('app')
    .service('getArchivedBlogsService', ['Restangular', function (Restangular) {
        var apiCallPromises = [];

        var getArchivedBlogPromise = function (year) {
            return Restangular.one("archivedposts", 3).one("year", year);
        }

        return {
            get: function() {
                var archivedBlogsByYear = [];
                for(var year = 2014; year <= new Date().getUTCFullYear(); year++)
                {
                    var archivedBlogPromise = getArchivedBlogPromise(year);

                    archivedBlogsByYear.push({ year: year, archivedBlogPromise: archivedBlogPromise });
                }
                return archivedBlogsByYear;
            }
        }
    }]);