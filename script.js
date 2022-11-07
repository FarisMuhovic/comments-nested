let clickedup = false;
let clickeddown = false;
function newreply(event) {
  event.target.parentNode.parentNode.parentNode.innerHTML += `
  <div class="comment" style="margin-left: 10%">
    <div class="user">
      <img src="https://i.kym-cdn.com/entries/icons/original/000/028/861/cover3.jpg" alt="avatar">
      <h2>Faris Muhovic</h2>
    </div>
    <textarea type="text" id="textinput" maxlength="569"></textarea>
    <div class="review">
      <button onclick="thumbsup(event)"><i class="fa-solid fa-thumbs-up"></i> <textarea disabled="true">0</textarea></button>
      <button onclick="thumbsdown(event)"><i class="fa-solid fa-thumbs-down"></i> <textarea disabled="true">0</textarea></button>
      <button id="reply" onclick="newreply(event)"><i class="fa-solid fa-reply"></i></button>
      <button id="post" onclick="post(event)">Post</button>
    </div>
  </div>`;
  clickedup = false;
  clickeddown = false;
}

function post(event) {
  let textbox = event.target.parentNode.parentNode.children[1];
  let textboxvalue = textbox.value;
  if (textboxvalue.length > 10) {
    textbox.style.border = "none";
    textbox.innerText = textboxvalue;
    textbox.style.height = textbox.scrollHeight + "px";
    textbox.setAttribute("disabled", true);
    event.target.remove();
  } else {
    alert("Please enter more than 10 words");
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
// be able to collapse elements
// save it to local storage as "server"
// make it so u cant make another post while making the post and prevent spam for creating posts.
// make a diffrent post for getting post making smth like that
