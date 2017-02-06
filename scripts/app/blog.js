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

		$scope.getNextBlogs = function() {
			getNextBlogsService.get($scope.Token).then(function(blogs) {
				console.log("got the next blogs");
				for ( var i = 0, j = blogs.items.length; i < j; i++) {
					$scope.blogs.push(blogs.items[i]);
				}
				$scope.Token = blogs.nextPageToken;
			});
		}

		$scope.getBlogWithId = function(idRequested) {
			var filteredBlogList = [];
			for ( var i = 0, j = $scope.blogs.length; i < j; i++) {
				var blogWithVisibility = $scope.blogs[i];
				blogWithVisibility.visible = $scope.blogs[i].id === idRequested;
				filteredBlogList.push(blogWithVisibility);
			}

			$scope.blogs = filteredBlogList;
			return filteredBlogList;
		}

		$scope.filterBlogWithIdToTop = function(idRequested) {
			var filteredBlogList = $scope.getBlogWithId(idRequested);

			for (var i = 0, j = $scope.blogs.length; i < j; i++) {
				var blogWithVisibility = $scope.blogs[i];
				blogWithVisibility.visible = $scope.blogs[i].id !== idRequested;
				filteredBlogList.push(blogWithVisibility);
			}

			$scope.blogs = filteredBlogList;
		}

        $scope.formatDate = function (published) {
            return new Date(published).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        }
	}]);