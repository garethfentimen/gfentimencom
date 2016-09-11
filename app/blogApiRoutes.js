var express = require('express'),
router = express.Router(),		// get an instance of the express Router
BlogReader = require('./blogReader'),
httpStatus = require('./httpStatus'),
blogQuery = require('./queries/blogpost/getTheLastNBlogPostsQuery'),
blogReader = new BlogReader();

router.use(function (req, res, next) {
    //console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
router.get('/api', function (req, res) {
    res.json({
        message: 'Welcome to the gfentimen.com web API',
        routes: '["/api/blogs", "/api/blog/:blog_id", ""]'
    });
});

router.route('/api/blog/:number')
    .get(function (req, res) {
        var numberToRetrieve = req.params.number;
        console.log("getting the last " + numberToRetrieve + " most recent blogs" + numberToRetrieve);
        if (numberToRetrieve === undefined)
        {
            res.status(httpStatus.BAD_REQUEST).json({ "message": "Please specifiy the number of blogs to retrieve"});
        }
        blogQuery.get(numberToRetrieve).then(function(result) {
            res.status(httpStatus.OK).json(result);
        }).catch(function(errorResult) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json(errorResult);
        });
    });

router.route('/api/blogs')
    .get(function (req, res) {
        // var blog = blogReader.getAllBlogInformation(function (blog) {
        //     res.json(blog);
        // });
    });

router.route('/api/blog/:blog_id')
    .get(function (req, res) {
        console.log("getting blog" + req.params.blog_id);
        var blog = blogReader.getBlogById(req.params.blog_id, function (blog) {
            res.json(blog);
        });
    });

module.exports = router;