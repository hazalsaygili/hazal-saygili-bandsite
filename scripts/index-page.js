import BandSiteApi from "./band-site-api.js";
const form = document.querySelector(".commentFlow__addComment");

let apiKey = "ac51252c-3c39-48f1-ade6-ee3f2ee13241";
const bandSiteApi = new BandSiteApi(apiKey);

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = event.target.commentName.value;
  const comment = event.target.commentContent.value;

  event.target.commentName.classList.remove("commentFlow__textFields--error");
  event.target.commentContent.classList.remove(
    "commentFlow__textFields--error"
  );
  let isError = false;
  if (!name) {
    event.target.commentName.classList.add("commentFlow__textFields--error");
    isError = true;
  }
  if (!comment) {
    event.target.commentContent.classList.add("commentFlow__textFields--error");
    isError = true;
  }
  if (isError) {
    alert("You need to enter a name and comment to post your comment");
    return;
  }

  let newComment = { name, comment };
  await bandSiteApi.postComment(newComment);
  form.reset();
  await displayCommentSection();
});

async function displayCommentSection() {
  let commentArray;
  try {
    commentArray = await bandSiteApi.getComments();
  } catch (error) {
    console.error(error);
  }

  const commentList = document.getElementById("comments");
  commentList.textContent = "";

  let commentWrappers = [];

  for (let i = 0; i < commentArray.length; i++) {
    const date = new Date(commentArray[i].timestamp).toLocaleDateString(
      "en-us"
    );
    const commentCardWrapper = createComment(
      commentArray[i].name,
      date,
      commentArray[i].comment
    );
    commentWrappers.push(commentCardWrapper);
    commentList.appendChild(commentCardWrapper);
  }
}

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
};

await displayCommentSection();
