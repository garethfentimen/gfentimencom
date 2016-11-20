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
					latestBlogs: ['blogFactory', function(blogFactory) {
                            return blogFactory.loadBlogPosts();
						}]
				}
			});

		RestangularProvider.setBaseUrl("/api");
	}])

    .controller('blogMain', ['$scope', 'latestBlogs', 'getNextBlogsService', function ($scope, latestBlogs, getNextBlogsService) {
		
		$scope.blogContent = "loading..";
        
        $scope.blogs = latestBlogs.items;

		$scope.Token = latestBlogs.nextPageToken;

		$scope.getNextBlogs = function(token) {
			getNextBlogsService.get(function(blogs) {
				$scope.blogs = blogs;
			});
		}

        $scope.formatDate = function (published) {
            return new Date(published).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        }

	}]);