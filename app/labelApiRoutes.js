module.exports = function(router) {

    router.get('/api/label', function (req, res) {
        var blog = blogReader.getMostRecentBlog(function (blog) {
            res.status().json(blog);
        });
    });

    return router;

};