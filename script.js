function newreply(event) {
  // if (event.target.parentNode.parentNode.getAttribute("data-id") != "main") {
  //   marginleft += 150;
  // } else {
  //   marginleft = 150;
  // }
  event.target.parentNode.parentNode.innerHTML += `
  <div class="comment" style="margin-left: 150px">
    <h2>Faris Muhovic</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi velit, quod culpa harum sequi tempore maiores aperiam, repellendus deleniti amet incidunt voluptas voluptatum voluptatibus ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, pariatur.</p>
    <div class="review">
      <button>Like <span>0</span></button>
      <button>Dislike <span>0</spa></button>
      <button id="reply" onclick="newreply(event)">Reply</button>
    </div>
  </div>`;
  // console.log(event.target);
  // console.log(event.target.parentNode.parentNode);
  // console.log(event.target.firstChild);
  // console.log(event.target.parentNode.parentNode.getAttribute("data-id"));
}
commentContainer.firstChild;
// just make the comment show under the eselected reply instead of the end of line !
// and for reply of reply make it on the same line
// insert before children etc. stuff like that
