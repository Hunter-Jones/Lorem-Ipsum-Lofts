FORUM_DIV = document.getElementById("forum-posts")
var forumPosts = [{username: 'User', header: "Head", message: "My Message...."},{username: 'Bob', header: "Sink is flooding", message: "This is a test message just to see how this would work"}]

forumPosts.forEach(addForumPosts)

FORM_BUTTON = document.getElementById("form-submit")

FORM_BUTTON.addEventListener("click", function () {
  newUsername = document.getElementById("form-username").value
  newHeader   = document.getElementById("form-header").value
  newMessage  = document.getElementById("form-message").value
  forumPosts += {username: newUsername, header: newHeader, message: newMessage}
  console.log(newUsername)

})






function addForumPosts(item, index, arr, div=FORUM_DIV) {
  // console.log(index + " " + item.username)
  div.innerHTML += "<div class='forum-post'>" + 
  				"<p class='post-username'>" + item.username + "</p>" +
  				"<p class='post-header'>" + item.header + "</p>" +
  				"<p class='post-message'>" + item.message + "</p>" +
  				"</div>"
}

// function getForumData()