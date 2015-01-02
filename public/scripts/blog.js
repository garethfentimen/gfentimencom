angular.module('app', ['ngAnimate', 'restangular', 'ngRoute', 'ngSanitize'])

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

	RestangularProvider.setBaseUrl("/api");
})



.controller('blogContent', ['$scope', 'Restangular', '$sce', function($scope, Restangular, $sce) {
	
	$scope.blogContent = "loading..";

	$scope.loadLatestBlogPost = function() {
    	console.log("do stuff here");
    	Restangular.one("blog").get().then(function(result) {
			if (result == null)
	    	{
				console.log("result of call was null", result);
	    	} else {
		    	console.log("result of call", result);
		    	$scope.blogTitle = result.Title;
		    	$scope.blogContent = $sce.trustAsHtml(result.Content);	
	    	}
    	});    	
  	};

	$scope.loadLatestBlogPost();
}]);