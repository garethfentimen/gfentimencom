angular
    .module('app')
    .service('archivedBlogPromisesService', ['Restangular', function (Restangular) {
        var apiCallPromises = [],
            archivedBlogsByYear = [];

        var getArchivedBlogPromise = function (year, nextPageToken) {
            return Restangular.one("archivedposts", 3).one("year", year).one("nextPageToken", nextPageToken);
        }

        Array.prototype.addRange = function(items) {
            for(var i = 0; i < items.length; i++) {
                var post = items[i];
                this.push(post);
            }
        }

        return {
            resolve: function(year, archivePromise, callback) {
                archivedBlogsByYear = [];
                archivePromise.get().then(function(result) {
                    archivedBlogsByYear = result.items;
                    if (result.nextPageToken)
                    {
                        getArchivedBlogPromise(year, result.nextPageToken).get(function(result) {
                            archivedBlogsByYear.addRange(result.items);
                            
                            if (result.nextPageToken)
                            {
                                getArchivedBlogPromise(year, result.nextPageToken).get(function(result) {
                                    archivedBlogsByYear.addRange(result.items);
                                    return callback(archivedBlogsByYear);
                                });
                            } else {
                                return callback(archivedBlogsByYear);
                            }
                        });
                    } else {
                        return callback(archivedBlogsByYear);
                    }
                });
            }
        }
    }]);