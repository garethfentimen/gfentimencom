var express = require('express'),
router = express.Router(),		// get an instance of the express Router
BlogReader = require('./blogReader'),
httpStatus = require('./httpStatus'),
blogQuery = require('./bloggerApi/queries/getTheLastNBlogPostsQuery'),
blogReader = new BlogReader();

router.use(function (req, res, next) {
    //console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
router.get('/api', function (req, res) {
    res.json({
        message: 'Welcome to the gfentimen.com web API',
        routes: '["/api/posts", "/api/posts/:post_id", ""]'
    });
});

var getPosts = function(req, res, nextPageToken) {
    var numberToRetrieve = req.params.number;
    console.log("getting the last " + numberToRetrieve + " most recent blog posts");
    if (numberToRetrieve === undefined)
    {
        res.status(httpStatus.BAD_REQUEST).json({ "message": "Please specifiy the number of blogs to retrieve"});
    }

    blogQuery.get(numberToRetrieve, nextPageToken).then(function(result) {
        res.status(httpStatus.OK).json(result);
    }).catch(function(errorResult) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(errorResult);
    });
};

router.route('/api/posts/:number/nextpage/:nextPageToken')
    .get(function (req, res) {
        var nextPageToken = req.params.nextPageToken;
        console.log("the next page token is: " + nextPageToken);

        getPosts(req, res, nextPageToken);
    });

router.route('/api/posts/:number')
    .get(function (req, res) {
        getPosts(req, res);
    });



router.route('/api/blogs')
    .get(function (req, res) {
        // var blog = blogReader.getAllBlogInformation(function (blog) {
        //     res.json(blog);
        // });
    });

router.route('/api/posts/:post_id')
    .get(function (req, res) {
        console.log("getting blog" + req.params.blog_id);
        var blog = blogReader.getBlogById(req.params.blog_id, function (blog) {
            res.json(blog);
        });
    });

module.exports = router;