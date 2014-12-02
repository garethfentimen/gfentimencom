angular.module('app', ['ngAnimate', 'restangular', 'ngRoute'])

.config(function($routeProvider, RestangularProvider) {
	
	$routeProvider.when('/:blogId', 
		{
			templateUrl: 'views/blog.html',
			controller: 'blogContent'
		})
		.when('/', 
		{
			templateUrl: 'views/blog.html',
			controller: 'blogContent'
		});

	RestangularProvider.setBaseUrl("api/");
})



.controller('blogContent', ['$scope', function($scope, Restangular) {
	
	$scope.blogContent = "";
}])