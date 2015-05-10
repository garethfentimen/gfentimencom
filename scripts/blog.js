(function() {
	'use strict';

angular
	.module('app', [
		'ngAnimate', 
		'restangular', 
		'ngRoute', 
		'ngSanitize',
		'ui.bootstrap'
	]);

angular
	.module('app')
	.config(function($routeProvider, RestangularProvider) {
		
		$routeProvider.when('/:blogId', 
			{
				templateUrl: 'public/views/blog.html',
				controller: 'blogContent'
			})
			.when('/', 
			{
				templateUrl: 'public/views/blog.html',
				controller: 'blogContent'
			});

		RestangularProvider.setBaseUrl("/api");
	});


angular
	.module('app')
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
			    	$scope.publishedOn = new Date(result.PublishedOn).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
		    	}
	    	});    	
	  	};

		$scope.loadLatestBlogPost();
	}]);

})();