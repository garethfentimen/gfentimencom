angular
    .module('app')
    .service('getArchivedBlogsService', ['getArchivedBlogsSynchronously', function (getArchivedBlogsSynchronously) {
        var result = null;

        var getArchivedBlogsRecursive = function (year, nextPageToken) {
            if (nextPageToken)
            {
                var nextPage = getArchivedBlogsSynchronously.get(year, nextPageToken);
                for (i = 0; i < nextPage.items.length; i++)
                {
                    result.items.push(nextPage.items[i]);
                }
                if (nextPage.nextPageToken) {
                    return getArchivedBlogsRecursive(year, nextPage.nextPageToken);
                }
            } else {
                result = getArchivedBlogsSynchronously.get(year, nextPageToken);
                if (result.nextPageToken) {
                    return getArchivedBlogsRecursive(year, result.nextPageToken);
                }
            }
            return result;
        }

        return {
            get: function() {
                var archivedBlogsByYear = [];
                for(var year = 2014; year <= new Date().getUTCFullYear(); year++)
                {
                    var archivedPostsResult = getArchivedBlogsRecursive(year, null);

                    archivedBlogsByYear.push({ year: year, archivedBlogs: archivedPostsResult.items });
                }
                return archivedBlogsByYear;
            }
        }
    }]);