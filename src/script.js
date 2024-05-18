// typewrite
var txtArray = ["Undergraduate Student Informatics"];
var speed = 100; // Kecepatan pengetikan

function typeWriter(txt, i, el) {
  if (i < txt.length) {
    el.innerHTML += txt.charAt(i);
    i++;
    setTimeout(function () {
      typeWriter(txt, i, el);
    }, speed);
  }
}

window.onload = function () {
  var typewriterElement = document.getElementById("typewriter");
  if (typewriterElement) {
    txtArray.forEach(function (txt) {
      typeWriter(txt, 0, typewriterElement);
    });
  }
};
