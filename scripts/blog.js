angular.module('app', ['ngAnimate', 'restangular', 'ngRoute', 'ngSanitize'])

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
})



.controller('blogContent', ['$scope', 'Restangular', '$sce', function($scope, Restangular, $sce) {
	
	$scope.blogContent = "loading..";
	$scope.blogs = [];

	$scope.loadLatestBlogPost = function() {
    	Restangular.one("blog").get().then(function(result) {
			if (result == null)
	    	{
				// log error
	    	} else {
		    	$scope.blogTitle = result.title;
		    	$scope.blogContent = $sce.trustAsHtml(result.content);	
	    	}
    	});    	
  	};

  	$scope.loadBlogListByMonth = function() {
		Restangular.one("blogs").get().then(function(blogInformation) {
			var blogs = blogInformation.blogs;
			for (var i=0, j=blogs.length; i < j; i++) 
			{
				var thePublishedDate = new Date(blogs[i].published);
				$scope.blogs.push({ Title: blogs[i].title, publishedDate: thePublishedDate.toDateString() });
			}
		});
  	};

	$scope.loadLatestBlogPost();
	$scope.loadBlogListByMonth();

	$scope.getBlogWithTitle = function(title) {
		Restangular.one("blog/").one(title).get().then(function(result) {
			if (result == null || result.Success == false)
	    	{
				// log error
	    	} else {
		    	$scope.blogTitle = result.title;
		    	$scope.blogContent = $sce.trustAsHtml(result.content);	
	    	}
    	});  
	}
}]);