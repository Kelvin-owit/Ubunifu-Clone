// copyright
document.getElementById("copyright").innerHTML = new Date().getMonth();
// Hamburger Menu

const navToggler = document.querySelector("#toggle-btn");
const navLinks = document.querySelector(".nav-list");

navToggler.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

const navbarLinks = document.querySelectorAll(".nav-list a");

navbarLinks.forEach((elem) => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
  if (navLinks.classList.contains("show")) {
    navToggler.click();
  }
}

// Sticky Navbar
const nav = document.querySelector(".nav-container");

function stickyNav() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

// Scroll to Top
let scrollBtn = document.querySelector("#scroll");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

//Call both functions
window.onscroll = function () {
  stickyNav();
  scrollFunction();
};

// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
// let scrollBtn = document.getElementById("scroll");
// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     scrollBtn.style.display = "block";
//   } else {
//     scrollBtn.style.display = "none";
//   }
// }
// window.onscroll = function () {
//   scrollFunction();
// };
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
