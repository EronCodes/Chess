var xPos;
var object = document.createElement("div");

function setup() {
  updateInterval = setInterval(update, 100);
}

function update() {

  xPos += 1;

  object.style.transform = "translate3d(" + xPos + "px, " +xPos + " px, 0)";
  object.style.height = "100px"
  object.style.width = "100px";
  object.style.backgroundColor = "green";
  document.body.appendChild(object);

}
