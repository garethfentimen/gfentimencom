angular.module('app', ['ngAnimate'])

.controller('blogContent', ['$scope', 'restangular', function($scope, restangular) {
	$scope.templateLocation = 'views/blogpartial';
}]);