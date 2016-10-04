angular
    .module('app')
    .service('getNextBlogsService', ['Restangular', function (Restangular) {
        return {
            get: function() {
                Restangular.one("blog", 3).get(function (result) {
                });
            }
        }
    }]);