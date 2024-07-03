const form = document.querySelector(".commentFlow__addComment");
let commentArray = [
  {
    name: "Isaac Tadesse",
    time: "10/20/2023",
    content: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough. Let us appreciate this for what it is and what it contains."
  },
  {
    name: "Christina Cabrera",
    time: "10/28/2023",
    content: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day. Let us appreciate this for what it is and what it contains."
  },
  {
    name: "Victor Pinto",
    time: "11/02/2023",
    content: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
  }
]

form.addEventListener("submit", (event) => {
  
  event.preventDefault();
  const name = event.target.commentName.value;
  const time = new Date().toLocaleDateString('en-us');
  const content = event.target.commentContent.value;

  event.target.commentName.classList.remove("commentFlow__textFields--error");
  if(!name){
    event.target.commentName.classList.add("commentFlow__textFields--error");
    return;
  }

  event.target.commentContent.classList.remove("commentFlow__textFields--error");
  if(!content){
    event.target.commentContent.classList.add("commentFlow__textFields--error");
    return;
  }

  let newComment = {name, time, content};
  commentArray.push(newComment);
  form.reset();
  const commentList = document.getElementById("comments");
  commentList.textContent="";

  let commentWrappers = [];
  for(let i=commentArray.length-1; i>=0; i--) {
    const commentCardWrapper = createComment(commentArray[i].name, commentArray[i].time, commentArray[i].content);
    commentWrappers.push(commentCardWrapper);
    commentList.appendChild(commentCardWrapper);
  }


});

let createComment = (name, time, content) => {

  const commentCardWrapper = document.createElement("div");
  commentCardWrapper.classList.add("commentFlow__commentCardWrapper");

  const commentImg = document.createElement("div");
  commentCardWrapper.appendChild(commentImg);
  commentImg.classList.add("commentFlow__Img");
  commentImg.classList.add("commentFlow__Img--anonym");

  const commentCard = document.createElement("li");
  commentCard.classList.add("commentFlow__commentCard");
  commentCardWrapper.appendChild(commentCard);

  const commentNameTimeWrapper = document.createElement("div");
  commentNameTimeWrapper.classList.add("commentFlow__commentedNameTimeWrapper");
  commentCard.appendChild(commentNameTimeWrapper);

  const commentName = document.createElement("p");
  commentName.classList.add("commentFlow__commentedName");
  commentName.innerHTML = name;
  commentNameTimeWrapper.appendChild(commentName);

  const commentTime = document.createElement("p");
  commentTime.classList.add("commentFlow__commentedTime");
  commentTime.innerHTML = time;
  commentNameTimeWrapper.appendChild(commentTime);

  const commentContent = document.createElement("p");
  commentContent.classList.add("commentFlow__commentedContent");
  commentContent.innerText = content;
  commentCard.appendChild(commentContent);

  return commentCardWrapper;
}


