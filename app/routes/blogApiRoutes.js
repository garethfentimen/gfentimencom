var express = require('express'),
router = express.Router(),
httpStatus = require('../httpStatus'),
blogQuery = require('../bloggerApi/queries/getTheLastNBlogPostsQuery'),
archivedPostsQuery = require('../bloggerApi/queries/getTheLastNArchivedBlogPostsQuery'),
getBlogPostById = require('../bloggerApi/queries/blogPosts/getBlogPostById'),
parameterValidation = require('../apiValidation/parameters');

router.use(function (req, res, next) {
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
router.get('/api', function (req, res) {
    res.json({
        message: 'Welcome to the gfentimen.com web API',
        routes: '["/api/posts", "/api/posts/:post_id", "/api/posts/:number", "/api/posts/:number/nextPageToken/:nextPageToken", "/api/archivedposts/:number/year/:year"]'
    });
});

var getPosts = function(req, res, nextPageToken) {
    var postsToRetrieve = parameterValidation.checkNumber(req, res);
    blogQuery.get(postsToRetrieve, nextPageToken).then(function(result) {
        res.status(httpStatus.OK).json(result);
    }).catch(function(errorResult) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(errorResult);
    });
};

router.route('/api/posts/:number/nextPageToken/:nextPageToken')
    .get(function (req, res) {
        var nextPageToken = req.params.nextPageToken;
        getPosts(req, res, nextPageToken);
    });

router.route('/api/posts/:number')
    .get(function (req, res) {
        getPosts(req, res);
    });

var getArchivedPosts = function(req, res, nextPageToken) {
    var postsToRetrieve = parameterValidation.checkNumber(req, res),
        year = parameterValidation.checkYear(req, res);

    archivedPostsQuery.get(postsToRetrieve, year, nextPageToken).then(function(result) {
        res.status(httpStatus.OK).json(result);
    }).catch(function(errorResult) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(errorResult);
    });
};

router.route('/api/archivedposts/:number/year/:year')
    .get(function (req, res) {
        getArchivedPosts(req, res);
    });

router.route('/api/archivedposts/:number/year/:year/nextPageToken/:nextPageToken')
    .get(function (req, res) {
        getArchivedPosts(req, res, req.params.nextPageToken);
    });

router.route('/api/post/:post_id')
    .get(function (req, res) {
        var postId = parameterValidation.checkNumber(req, res, "post_id");
        getBlogPostById.get(postId).then(function(blog) {
            res.json(blog);
        }).catch(function(errorResult) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json(errorResult);
        });
    });

module.exports = router;