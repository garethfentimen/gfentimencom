angular
    .module('app')
    .factory('blogFactory', ['Restangular', '$sce', function (Restangular, $sce) {

        

        return {
            loadLatestEightBlogPosts: function () {
                return Restangular.one("blog", 3).get(function (result) {
                    console.log("ok I am running the main query");
                    console.log(result);
                    return result;
                    //if (result === null) {
                    //    //console.log("result of call was null", result);
                    //} else {
                    //    //console.log("result of call", result);
                    //    return {
                    //        blogTitle: result.title,
                    //        blogContent: result.content,
                    //        publishedOn: new Date(result.publishedOn).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
                    //    };
                    //}
                });
            },
            loadLatestBlogPost: function () {
                return Restangular.one("blog").get().then(function (result) {
                    console.log("Only runs if called");
                    console.log(result);
                    console.log("leaving");

                    //if (result === null) {
                    //    //console.log("result of call was null", result);
                    //} else {
                    //    //console.log("result of call", result);
                    //    return {
                    //        blogTitle: result.title,
                    //        blogContent: result.content,
                    //        publishedOn: new Date(result.publishedOn).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
                    //    };
                    //}
                });
            }
        }

        
}]);