function createPost() {
  const pageTemplateFn = _.template(document.getElementById("page-template").innerHTML);
  const postTemplateFn = _.template(document.getElementById("post-template").innerHTML);
  const commentTemplateFn = _.template(document.getElementById("comment-template").innerHTML);
  
  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("postAuthor").value;
  let post = document.getElementById("postBody").value;
  
  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();
}

function postComment() {
  
}