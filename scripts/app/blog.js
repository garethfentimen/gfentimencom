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
                            return blogFactory.loadLatestEightBlogPosts();
						}]
				}
			});

		RestangularProvider.setBaseUrl("/api");
	}])

    .controller('blogMain', ['$scope', 'latestBlogs', function ($scope, latestBlogs) {
		
		$scope.blogContent = "loading..";
        
        $scope.blogs = latestBlogs.items;

		$scope.Token = latestBlogs.nextPageToken;

		$scope.getNextBlogs = function(token) {
			
		}

        $scope.formatDate = function (published) {
            return new Date(published).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        }

	}]);