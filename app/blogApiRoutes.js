var express = require('express'),
router = express.Router(),
BlogReader = require('./blogReader'),
httpStatus = require('./httpStatus'),
blogQuery = require('./bloggerApi/queries/getTheLastNBlogPostsQuery'),
archivedPostsQuery = require('./bloggerApi/queries/getTheLastNArchivedBlogPostsQuery'),
parameterValidation = require('./apiValidation/parameters'),
blogReader = new BlogReader();

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

var getPosts = function(req, res, postsToRetrieve, nextPageToken) {
    blogQuery.get(postsToRetrieve, nextPageToken).then(function(result) {
        res.status(httpStatus.OK).json(result);
    }).catch(function(errorResult) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(errorResult);
    });
};

router.route('/api/posts/:number/nextPageToken/:nextPageToken')
    .get(function (req, res) {
        var nextPageToken = req.params.nextPageToken;
        var postsToRetrieve = parameterValidation.checkNumber(req, res);
        getPosts(req, res, postsToRetrieve, nextPageToken);
    });

router.route('/api/posts/:number')
    .get(function (req, res) {
        var postsToRetrieve = parameterValidation.checkNumber(req, res);
        getPosts(req, res, postsToRetrieve);
    });

var getArchivedPosts = function(req, res, nextPageToken) {
    var postsToRetrieve = parameterValidation.checkNumber(req, res);
    archivedPostsQuery.get(numberToRetrieve, nextPageToken).then(function(result) {
        res.status(httpStatus.OK).json(result);
    }).catch(function(errorResult) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(errorResult);
    });
};

router.route('/api/archivedposts/:number/year/:year')
    .get(function (req, res) {
        parameterValidation.checkNumber(req, res);
        getArchivedPosts(req, res);
    });

router.route('/api/archivedposts/:number/year/:year/nextPageToken/:nextPageToken')
    .get(function (req, res) {
        parameterValidation.checkNumber(req, res);
        getArchivedPosts(req, res);
    });

router.route('/api/posts/:post_id')
    .get(function (req, res) {
        console.log("getting blog" + req.params.blog_id);
        var blog = blogReader.getBlogById(req.params.blog_id, function (blog) {
            res.json(blog);
        });
    });

module.exports = router;