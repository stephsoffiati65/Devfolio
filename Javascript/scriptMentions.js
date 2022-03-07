
// Animation burger
// ==================================================

let menu = document.querySelector(".menu")
let ham = document.querySelector(".ham")
let xIcon = document.querySelector(".xIcon")
let burgerIcon = document.querySelector(".burgerIcon")
let a1 = document.querySelector("#a1")
let a2 = document.querySelector("#a2")
let a3 = document.querySelector("#a3")
let a4 = document.querySelector("#a4")
let a5 = document.querySelector("#a5")
let a6 = document.querySelector("#a6")


ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    burgerIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    burgerIcon.style.display = "none";
  }
}

a1.addEventListener("click", toggleLink)

function toggleLink() {
  menu.classList.remove("showMenu");
  xIcon.style.display = "none";
  burgerIcon.style.display = "block";
}

a2.addEventListener("click", toggleLink)

function toggleLink() {
  menu.classList.remove("showMenu");
  xIcon.style.display = "none";
  burgerIcon.style.display = "block";
}

a3.addEventListener("click", toggleLink)

function toggleLink() {
  menu.classList.remove("showMenu");
  xIcon.style.display = "none";
  burgerIcon.style.display = "block";
}

a4.addEventListener("click", toggleLink)

function toggleLink() {
  menu.classList.remove("showMenu");
  xIcon.style.display = "none";
  burgerIcon.style.display = "block";
}

a5.addEventListener("click", toggleLink)

function toggleLink() {
  menu.classList.remove("showMenu");
  xIcon.style.display = "none";
  burgerIcon.style.display = "block";
}

a6.addEventListener("click", toggleLink)

function toggleLink() {
  menu.classList.remove("showMenu");
  xIcon.style.display = "none";
  burgerIcon.style.display = "block";
}

// Animation SVG
// ==================================================

const path = document.querySelector('path');


// Bouton Back To Top
// ==================================================

const bttM = document.querySelector('#bttM');
const mentionsLegales = document.querySelector('#mentionsLegales');

window.addEventListener('scroll', () => {

  const { scrollTop, clientHeight } = document.documentElement;

  const topMentions = mentionsLegales.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topMentions).toFixed() - clientHeight *0.8) {
    bttM.classList.add('showBttM');
  } else {
    bttM.classList.remove('showBttM');
  }
})



