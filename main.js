var menuIcon = document.getElementsByClassName("menu-icon");
var responsiveNav = document.getElementById("res-nav");

for (var i = 0; i < menuIcon.length; i++) {
  menuIcon[i].addEventListener("click", function () {
    responsiveNav.classList.toggle("toggle-nav");
  })
}
