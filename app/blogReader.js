var feed = require("feed-read"),
    blogRepository = require("./repositories/blogPostRepository");

var blogReader = function () {
    this.blogRepository = new blogRepository();
};

blogReader.prototype = function () {

    var findByKeyword = function (keyword, callback) {

    }

    var retrieveMostRecentBlog = function (callback) {
        feed('http://garethscode.blogspot.com/feeds/posts/default', function (err, articles) {
            if (err) throw err;
            // Each article has the following properties:
            // 
            //   * "title"     - The article title (String).
            //   * "author"    - The author's name (String).
            //   * "link"      - The original article link (String).
            //   * "content"   - The HTML content of the article (String).
            //   * "published" - The date that the article was published (Date).
            //   * "feed"      - {name, source, link}
            // 

            // for(var i = 0, l = articles.length; i < l; i++)
            // {

            // }

            var mostRecentBlogPost = articles[0];
            //console.log(articles[0]);
            var blog = {
                title: mostRecentBlogPost.title,
                content: mostRecentBlogPost.content,
                publishedOn: mostRecentBlogPost.published
            };

            callback(blog);
        });
    };

    var retrieveBlogById = function (id, callback) {
        var result = this.blogRepository.getBlogById(id);
        if (result != null && result.Success) {
            callback(result.blog);
        } else {
            callback({ Success: false, message: "Unable to find blog" });
        }
    };

    return {
        getBlogById: retrieveBlogById,
        getMostRecentBlog: retrieveMostRecentBlog
    }

}();

module.exports = blogReader;