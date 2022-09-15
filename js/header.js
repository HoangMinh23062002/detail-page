


function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
   if (this.scrollY >= 85) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});

// Change Header Length on Scrolling
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.height = "80px";
    document.getElementById("logo").style.height = "50px";
    document.getElementById("logo").style.width = "110px";
    document.getElementById("menu").style.marginTop = "-2%";
    document.getElementById("logo").style.marginTop = "-20px";
    document.getElementById("burger").style.marginTop = "-21px";



  } else {
    document.getElementById("header").style.height = "102px";
    document.getElementById("logo").style.width = "116px";
    document.getElementById("menu").style.marginTop = "0";
    document.getElementById("burger").style.marginTop = "0";
    document.getElementById("logo").style.marginTop = "0";

  }
}