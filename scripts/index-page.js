const form = document.querySelector(".commentFlow__addComment");
let commentArray = [
  {
    name: "Isaac Tadesse",
    content: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough. Let us appreciate this for what it is and what it contains."
  },
  {
    name: "Christina Cabrera",
    content: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day. Let us appreciate this for what it is and what it contains."
  },
  {
    name: "Victor Pinto",
    content: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
  }
]
// add an event listener ("callback")
form.addEventListener("submit", (event) => {
  
  event.preventDefault();
  const name = event.target.commentName.value;
  const content = event.target.commentContent.value;
  let newComment = {name,content};
  commentArray.push(newComment);
  form.reset();
  const commentList = document.getElementById("comments");
  commentList.textContent="";

  let commentWrappers = [];
  for(let i=commentArray.length-1; i>=0; i--) {
    const commentCardWrapper = createComment(commentArray[i].name, commentArray[i].content);
    commentWrappers.push(commentCardWrapper);
    commentList.appendChild(commentCardWrapper);
  }
 

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


