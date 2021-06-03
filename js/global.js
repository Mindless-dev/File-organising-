const hamburgerMenu = document.querySelector("#hamburger");
const nav = document.querySelector("nav");

function mobileNav() {
  if (nav.className === "openNav") {
    nav.className = "";
  } else {
    nav.className = "openNav";
  }
}

hamburgerMenu.addEventListener("click", mobileNav);
