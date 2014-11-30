angular.module('app', ['ngAnimate'])

.controller('blogContent', ['$scope', 'restangular', function($scope, restangular) {
	

}])

.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/Blog/:blogId', 
		{
			templateUrl: 'blog.html',
			controller: 'blogContent'
		})
	.when('/Blog/', 
		{
			templateUrl: 'blog.html',
			controller: 'blogContent'
		});