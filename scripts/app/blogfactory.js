angular
    .module('app')
    .factory('blogFactory', ['Restangular', '$sce', function (Restangular, $sce) {
        
        return {
            loadBlogPosts: function () {
                return Restangular.one("posts", 3).get(function (result) {
                    result;
                });
            },
            loadLatestBlogPost: function () {
                return Restangular.one("blog").get().then(function (result) {
                    
                });
            }
        }
}]);