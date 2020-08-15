window.addEventListener("click", (e) => {
  var body = document.querySelector(".ground");
  body.innerHTML = "";
  var square = document.createElement("div");
  square.classList = "square";
  square.style.left = e.pageX + "px";
  square.style.top = e.pageY + "px";
  body.appendChild(square);
});

window.addEventListener(
  "contextmenu",
  function (ev) {
    ev.preventDefault();
    var currentSquare = document.querySelector(".square");
    if (!currentSquare) return false;
    var body = document.querySelector("body");
    currentSquare.classList = "pentagon";
    // currentSquare.style.background = "transparent";
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    body.style.background = randomColor;
    return false;
  },
  false
);
