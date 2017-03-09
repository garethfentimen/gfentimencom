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
                        getArchivedBlogPromise(year, result.nextPageToken).get().then(function(result2) {
                            if (result2.items) {
                                archivedBlogsByYear.addRange(result2.items);
                            }
                            
                            if (result2.nextPageToken)
                            {
                                getArchivedBlogPromise(year, result2.nextPageToken).get().then(function(result3) {
                                    if (result3.items) {
                                        archivedBlogsByYear.addRange(result3.items);
                                    }
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