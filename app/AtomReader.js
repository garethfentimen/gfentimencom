var feed = require("feed-read");
var blogReader = function() {};

blogReader.prototype.GetMostRecentBlog = function() {
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

  var blog = {};
  blog.Title = articles[0].title;
  blog.Content = articles[0].content;
  return blog;
})
};

exports.BlogReader = blogReader;