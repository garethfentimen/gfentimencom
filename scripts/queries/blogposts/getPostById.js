angular
    .module('app')
    .service('getPostByIdService', ['Restangular', function (Restangular) {
        return {
            get: function(postId) {
                return Restangular.one("post", postId).get();
            }
        }
    }]);