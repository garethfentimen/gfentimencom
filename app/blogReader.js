var feed = require("feed-read");
var blogReader = {

  GetBlogByTitle : function(title, callback) {
    feed('http://garethscode.blogspot.com/feeds/posts/default', function(err, articles) {
      for(var i = 0, l = articles.length; i < l; i++)
      {
          if (articles[i].title === title)
          {
            var blog = {
                    Success: true,
                    Title: articles[i].title,
                    Content: articles[i].content
                  };

            callback(blog); 
          }
      }

      callback({ Success: false, message: "Unable to find blog" });
    });
  },

  // async function- use callback to get result
  GetMostRecentBlog : function(callback) {
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
        Title: mostRecentBlogPost.title,
        Content: mostRecentBlogPost.content,
        PublishedOn: mostRecentBlogPost.published
      };

      callback(blog);
    });
  }
};

module.exports = blogReader;