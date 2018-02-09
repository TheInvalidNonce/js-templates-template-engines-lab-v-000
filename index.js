function createPost() {
  const pageTemplateFn = _.template(document.getElementById("page-template").innerHTML);
  const postTemplateFn = _.template(document.getElementById("post-template").innerHTML);
  const commentsTemplateFn = _.template(document.getElementById("comment-template").innerHTML);
  
  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("postAuthor").value;
  let post = document.getElementById("postBody").value;
  
  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();
  
  let templateHTML = postTemplateFn({ 'title': postTitle, 'body': post, 'poster':postAuthor});
  let postElement = document.getElementById("post");
 
  postElement.innerHTML = templateHTML;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsTemplateFn();
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenter").value;
  var commentsSection = document.getElementById("comments");

commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });

}