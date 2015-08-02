var feed = require("feed-read");
var BlogRepository = require("./repositories/blogRepository");

var blogReader = function() {
  this.blogRepository = new BlogRepository();
};

blogReader.prototype = function() {

  var retrieveAllBlogInfo = function(callback) {

      feed('http://garethscode.blogspot.com/feeds/posts/default', function(err, articles) {
      
        var blogInformationContainer = { Success: true };
        blogInformationContainer.blogs = [];

        for(var i = 0, l = articles.linkength; i < l; i++)
        {
            try {
              blogInformationContainer.blogs.push({
                        title: articles[i].title,
                        published: articles[i].published,
                        content: articles[i].content
                      });
            }
            catch(err)
            {
                callback({ Success: false, message: "Unable to retrieve all blog information" + err });
            }
        }

        try
        {
            this.blogRepository.saveBlogs(blogInformationContainer.blogs);
            callback(blogInformationContainer);
        }
        catch(err) {
            callback({ Success: false, message: "Unable to persist blog information" + err });
        }
    });
  };

  // async function- use callback to get result
  var retrieveMostRecentBlog = function(callback) {

    feed('http://garethscode.blogspot.com/feeds/posts/default', function(err, articles) {
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

      var blog = {
        title: mostRecentBlogPost.title,
        content: mostRecentBlogPost.content
      };

      callback(blog);
    });

  };

  var retrieveBlogById = function(id, callback) {
      var result = this.blogRepository.getBlogById(id);
      if (result != null && result.Success)
      {
          callback(result.blog);
      } else {
          callback({ Success: false, message: "Unable to find blog" });
      }
  };

  return {
    getBlogById : retrieveBlogById,
    getMostRecentBlog: retrieveMostRecentBlog,
    getAllBlogInformation : retrieveAllBlogInfo
  }

}();

module.exports = blogReader;