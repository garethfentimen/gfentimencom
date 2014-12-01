angular.module('app', ['ngAnimate', 'restangular'])

	.config(function($routeProvider) {
		
		$routeProvider.when('/:blogId', 
			{
				templateUrl: 'blog.html',
				controller: 'blogContent'
			})
			.when('/', 
			{
				templateUrl: 'blog.html',
				controller: 'blogContent'
			});
	})

.controller('blogContent', ['$scope', function($scope, Restangular) {
	
	$scope.blogContent = "";
}])