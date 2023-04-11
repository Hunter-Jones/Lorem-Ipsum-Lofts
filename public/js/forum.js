// var arr = [{"TestUser", "This is a header", "This is a message body"}]

FORUM_DIV = document.getElementById("forum-posts")
var forumPosts = [{username: 'User', header: "Head", message: "My Message...."},{username: 'Bob', header: "Sink is flooding", message: "This is a test message just to see how this would work"}]

forumPosts.forEach(addForumPosts)

function addForumPosts(item, index, arr, div=FORUM_DIV) {
  // console.log(index + " " + item.username)
  div.innerHTML += "<div class='forum-post'>" + 
  				"<p class='post-username'>" + item.username + "</p>" +
  				"<p class='post-header'>" + item.header + "</p>" +
  				"<p class='post-message'>" + item.message + "</p>" +
  				"</div>"
}