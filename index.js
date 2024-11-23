document.addEventListener("DOMContentLoaded", function () {
      new TypeIt(".ketikan", {
        strings: ["Oy Kontolll"],
      }).go();
    });
    //Kelap kelip navbar
    function toggleNavbar() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}