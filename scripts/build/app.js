(function() {
	'use strict';

angular
	.module('app', [
		'ngAnimate', 
		'restangular', 
		'ngRoute', 
		'ngSanitize',
		'angular-loading-bar'
	]);

angular
	.module('app')
	.config(['$routeProvider', 'RestangularProvider', function($routeProvider, RestangularProvider) {
		
		$routeProvider
			.when('/',
			{
				redirectTo: 'latest'
			})
			.when('/latest', 
			{
				templateUrl: 'public/views/blog.html',
				controller: 'blogMain',
				resolve: {
					latestBlog: ['blogFactory', function(blogFactory) {
							//var blogRequest = $q.defer();
							return blogFactory.loadLatestBlogPost;
							//return blogRequest.promise;
						}]
				}
			});

		RestangularProvider.setBaseUrl("/api");
	}])

	.controller('blogMain', ['$scope', '$sce', 'latestBlog', function($scope, $sce, latestBlog) {
		
		//$scope.blogContent = "loading..";

		//var result = blogFactory.loadLatestBlogPost();
		
		$scope.mainContent = $sce.trustAsHtml(latestBlog.blogContent);
		$scope.blogTitle = latestBlog.blogTitle;
		$scope.publishedOn = latestBlog.publishedOn;

	}]);

})();
 (function() {
 	'use strict';

	angular
		.module('app')
		.factory('blogFactory', ['Restangular', '$sce', function(Restangular, $sce) {
			
			var fac = {};

			fac.loadLatestBlogPost = Restangular.one("blog").get().then(function(result) {
					if (result === null)
			    	{
						//console.log("result of call was null", result);
			    	} else {
				    	//console.log("result of call", result);
				    	return {
					    		blogTitle: result.title,
					    		blogContent: result.content,
					    		publishedOn: new Date(result.publishedOn).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
					    	};
			    	}
		    	});

	    	return fac;
		}]);

})();