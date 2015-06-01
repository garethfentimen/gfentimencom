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
					    		blogTitle: result.Title,
					    		blogContent: result.Content,
					    		publishedOn: new Date(result.PublishedOn).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
					    	};
			    	}
		    	});

	    	return fac;
		}]);

})();