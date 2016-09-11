var express = require('express');
var router = express.Router(); 				// get an instance of the express Router
var BlogReader = require('./blogReader');
var blogQuery = require();
var blogReader = new BlogReader();

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
        console.log("getting the last " + req.params.number + " most recent blogs" + req.params.number);
        
    });

router.route('/api/blogs')
    .get(function (req, res) {
        var blog = blogReader.getAllBlogInformation(function (blog) {
            res.json(blog);
        });
    });

router.route('/api/blog/:blog_id')
    .get(function (req, res) {
        console.log("getting blog" + req.params.blog_id);
        var blog = blogReader.getBlogById(req.params.blog_id, function (blog) {
            res.json(blog);
        });
    });

module.exports = router;