const form = document.querySelector(".commentFlow__addComment");
console.log(form);

// add an event listener ("callback")
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form submitted");
  console.log(event);

  const name = event.target.commentName.value;
  const content = event.target.commentContent.value;

  const commentCardWrapper = createComment(name, content);
  const commentList = document.getElementById("comments")
  commentList.insertBefore(commentCardWrapper,commentList.firstChild);

});

let createComment = (name, content) => {
  const commentCardWrapper = document.createElement("div");
  commentCardWrapper.classList.add("commentFlow__commentCardWrapper");

  const commentImg = document.createElement("div");
  commentCardWrapper.appendChild(commentImg);
  commentImg.classList.add("commentFlow__Img");
  commentImg.classList.add("commentFlow__Img--anonym");

  const commentCard = document.createElement("li");
  commentCard.classList.add("commentFlow__commentCard");
  commentCardWrapper.appendChild(commentCard);

  const commentName = document.createElement("p");
  commentName.classList.add("commentFlow__commentedName");
  commentName.innerHTML = name;
  commentCard.appendChild(commentName);

  const commentContent = document.createElement("p");
  commentContent.classList.add("commentFlow__commentedContent");
  commentContent.innerText = content;
  commentCard.appendChild(commentContent);

  return commentCardWrapper;
}
