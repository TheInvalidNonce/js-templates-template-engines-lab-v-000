function createPost() {
  const pageTemplateFn = _.template(document.getElementById("page-template").innerHTML);
  const postTemplateFn = _.template(document.getElementById("post-template").innerHTML);
  const commentsTemplateFn = _.template(document.getElementById("comments-template").innerHTML);
  
  var postTitle = document.getElementById("postTitle").value;
  var post = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();

  var blogSection = postTemplateFn({ 'title': postTitle, 'body': post, 'poster': postAuthor });
  var commentsSection = commentsTemplateFn();
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {

}