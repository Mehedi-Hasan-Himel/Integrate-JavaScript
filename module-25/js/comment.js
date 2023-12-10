// Step 01:
document.getElementById("btn-post").addEventListener("click", function () {
  // step - 02
  const comment = document.getElementById("new-comment");
  const commentText = comment.value;

  // step - 03
  const commentContainer = document.getElementById("comment-container");
  const newComment = document.createElement("p");
  newComment.innerText = commentText;
  commentContainer.appendChild(newComment);

  // step - 04
  comment.value = "";
});
