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

    .controller('blogMain', ['$scope', 'latestBlogs', 'getNextBlogsService', 'getArchivedBlogsService', 'archivedBlogPromisesService', 
					function ($scope, latestBlogs, getNextBlogsService, getArchivedBlogsService, archivedBlogPromisesService) {
		
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
			angular.forEach($scope.blogs, function(blog, blogId) {
				if (blog.id === idRequested) {
					filteredBlogList.push(blog);
				}
			});

			return filteredBlogList;
		}

		$scope.filterBlogWithIdToTop = function(idRequested) {
			var filteredBlogList = $scope.getBlogWithId(idRequested);

			for (var i = 0, j = $scope.blogs.length; i < j; i++) {
				if ($scope.blogs[i].id !== idRequested)
				{
					filteredBlogList.push($scope.blogs[i]);
				}
			}

			$scope.blogs = filteredBlogList;
		}

        $scope.formatDate = function (published) {
            return new Date(published).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        }

		$scope.formatShortDate = function (published) {
            return new Date(published).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
        }

		$scope.getArchivedBlogPromises = function() {
			$scope.blogYears = getArchivedBlogsService.get();
		}

		$scope.resolveArchivedBlogPromises = function(blogYear) {
			$scope.showArchiveLoader = true;
			archivedBlogPromisesService.resolve(blogYear.year, blogYear.archivedBlogPromise, function (items) {
				blogYear.archivedBlogs = items;
				$scope.showArchiveLoader = false;
			});
		}
	}]);