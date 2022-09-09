function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
// 
  var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".home").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}
// 
function openNav() {
  document.getElementById("mySidenav").style.height = "500px";
}

function closeNav() {
  document.getElementById("mySidenav").style.height = "0";
}