let clickedup = false;
let clickeddown = false;
let count = localStorage.getItem("count");
if (count == null) {
  count = 0;
}
function newreply(event) {
  count++;
  let replyTemplate = `
  <div class="comment" style="margin-left: 10%" id="replies" data-del=${count}>
    <div class="user">
      <img src="https://i.kym-cdn.com/entries/icons/original/000/028/861/cover3.jpg" alt="avatar">
      <h2>Faris Muhovic</h2>
    </div>
    <textarea type="text" id="textinput" maxlength="569" required></textarea>
    <div class="review">
      <button onclick="thumbsup(event)"><i class="fa-solid fa-thumbs-up"></i> <textarea disabled="true">0</textarea></button>
      <button onclick="thumbsdown(event)"><i class="fa-solid fa-thumbs-down"></i> <textarea disabled="true">0</textarea></button>
      <button id="reply" onclick="newreply(event)"><i class="fa-solid fa-reply"></i></button>
      <button id="post" onclick="post(event)">Post</button>
      <button id="remove"><i class="fa-solid fa-trash" onclick="deleteReply(event)"></i></button>
    </div>
  </div>`;
  // localStorage.setItem(count, replyTemplate);
  // localStorage.setItem("count", count);
  event.target.parentNode.parentNode.parentNode.innerHTML += replyTemplate;
  clickedup = false;
  clickeddown = false;
}
let collapsed = false;
function collapse() {
  if (collapsed == false) {
    let singleReply = document.querySelectorAll("#replies");
    singleReply.forEach(reply => {
      reply.style.display = "none";
    });
    document.getElementById(
      "collapse"
    ).innerHTML = `<i class="fa-solid fa-square-plus"></i>`;
    collapsed = true;
  } else {
    let singleReply = document.querySelectorAll("#replies");
    singleReply.forEach(reply => {
      reply.style.display = "flex";
    });
    document.getElementById(
      "collapse"
    ).innerHTML = `<i class="fa-solid fa-square-minus"></i>`;
    collapsed = false;
  }
}
function post(event) {
  let textbox = event.target.parentNode.parentNode.children[1];
  let textboxvalue = textbox.value;
  if (textboxvalue.length > 10) {
    let replyTemplate = `
    <div class="comment" style="margin-left: 10%" id="replies" data-del=${count}>
      <div class="user">
        <img src="https://i.kym-cdn.com/entries/icons/original/000/028/861/cover3.jpg" alt="avatar">
        <h2>Faris Muhovic</h2>
      </div>
      <textarea type="text" id="textinput" maxlength="569" disabled="true" required>${textboxvalue}</textarea>
      <div class="review">
        <button onclick="thumbsup(event)"><i class="fa-solid fa-thumbs-up"></i> <textarea disabled="true">0</textarea></button>
        <button onclick="thumbsdown(event)"><i class="fa-solid fa-thumbs-down"></i> <textarea disabled="true">0</textarea></button>
        <button id="reply" onclick="newreply(event)"><i class="fa-solid fa-reply"></i></button>
        <button id="post" onclick="post(event)">Post</button>
        <button id="remove"><i class="fa-solid fa-trash" onclick="deleteReply(event)"></i></button>
      </div>
    </div>`;
    textbox.innerText = textboxvalue;
    textbox.style.height = textbox.scrollHeight + "px";
    textbox.setAttribute("disabled", true);
    localStorage.setItem(count, replyTemplate);
    localStorage.setItem("count", count);
    event.target.remove();
  } else {
    alert("Please enter more than 10 letters");
  }
}
function thumbsup(event) {
  if (clickedup == false) {
    event.target.parentNode.lastChild.innerText = "1";
    event.target.style.color = "green";
    clickedup = true;
  } else {
    event.target.parentNode.lastChild.innerText = "0";
    event.target.style.color = "white";
    clickedup = false;
  }
}
function thumbsdown(event) {
  if (clickeddown == false) {
    event.target.parentNode.lastChild.innerText = "1";
    event.target.style.color = "red";
    clickeddown = true;
  } else {
    event.target.parentNode.lastChild.innerText = "0";
    event.target.style.color = "white";
    clickeddown = false;
  }
}
function deleteReply(event) {
  let container = event.target.parentNode.parentNode.parentNode;
  container.remove();
  localStorage.setItem(container.getAttribute("data-del"), "");
}
// make it so u cant make another post while making the post and prevent spam for creating posts.
for (let i = 1; i < localStorage.length; i++) {
  document.getElementById("commcont").innerHTML += localStorage.getItem(i);
}
