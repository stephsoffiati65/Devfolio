
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

// // Animations slide-in
// // ==================================================

const slidingLeft = document.querySelector('.slide-in-left');


window.addEventListener('scroll', () => {

  const { scrollTop, clientHeight } = document.documentElement;
  const topLeft = slidingLeft.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topLeft).toFixed() - clientHeight * 0.8) {
    slidingLeft.classList.add('active')
  }
})

const slidingLeftDos = document.querySelector('.slide-in-left-dos');


window.addEventListener('scroll', () => {

  const { scrollTop, clientHeight } = document.documentElement;
  const topLeft = slidingLeftDos.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topLeft).toFixed() - clientHeight * 0.8) {
    slidingLeftDos.classList.add('active')
  }
})

// TypeWriter
// ==================================================

let typedIndex = new Typed("#typedIndex", {
  strings: ['FRONT-END', 'WORDPRESS', 'FREELANCE'],
  typeSpeed: 120,
  backSpeed: 60,
  loop: true
})



// Animation cercles de compétences
// ==================================================

const html = document.querySelector('.pourcent1 svg circle:nth-child(2)');
const css = document.querySelector('.pourcent2 svg circle:nth-child(2)');
const js = document.querySelector('.pourcent3 svg circle:nth-child(2)');
const wp = document.querySelector('.pourcent4 svg circle:nth-child(2)');
const bs = document.querySelector('.pourcent5 svg circle:nth-child(2)');
const java = document.querySelector('.pourcent6 svg circle:nth-child(2)');
const node = document.querySelector('.pourcent7 svg circle:nth-child(2)');
const react = document.querySelector('.pourcent8 svg circle:nth-child(2)');

window.addEventListener('scroll', () => {

  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = html.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
    html.classList.add('scroll');
    css.classList.add('scroll');
    js.classList.add('scroll');
    wp.classList.add('scroll');
    bs.classList.add('scroll');
    java.classList.add('scroll');
    node.classList.add('scroll');
    react.classList.add('scroll');
  }
})

// Projets
// ==================================================

const projets = document.querySelector('#projets');
const services = document.querySelector('#services');
const etapes = document.querySelector('#etapes');
const contact = document.querySelector('#contact');
const greenBurger = document.querySelector('#greenBurger');
const blackBurger = document.querySelector('#blackBurger');


window.addEventListener('scroll', () => {

  const { scrollTop, clientHeight } = document.documentElement;

  const topProjets = projets.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topProjets).toFixed() - clientHeight * 0.1) {
    greenBurger.style.display = "none";
    blackBurger.style.display = "block";
  } else {
    greenBurger.style.display = "block";
    blackBurger.style.display = "none";
  }
})


window.addEventListener('scroll', () => {

  const { scrollTop, clientHeight } = document.documentElement;

  const topServices = services.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topServices).toFixed() - clientHeight * 0.1) {
    greenBurger.style.display = "block";
    blackBurger.style.display = "none";
  }
})


window.addEventListener('scroll', () => {

  const { scrollTop, clientHeight } = document.documentElement;

  const topEtapes = etapes.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topEtapes).toFixed() - clientHeight * 0.05) {
    greenBurger.style.display = "none";
    blackBurger.style.display = "block";
  }
})


window.addEventListener('scroll', () => {

  const { scrollTop, clientHeight } = document.documentElement;

  const topContact = contact.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topContact).toFixed() - clientHeight * 0.1) {
    greenBurger.style.display = "block";
    blackBurger.style.display = "none";
  }
})


// Etapes
// ==================================================


const contactStep = document.querySelector('#stepsContainer ul:nth-child(1)');
const devis = document.querySelector('#stepsContainer ul:nth-child(2)');
const echange = document.querySelector('#stepsContainer ul:nth-child(3)');
const realisation = document.querySelector('#stepsContainer ul:nth-child(4)');
const validation = document.querySelector('#stepsContainer ul:nth-child(5)');
const livraison = document.querySelector('#stepsContainer ul:nth-child(6)');


window.addEventListener('scroll', () => {

  const { scrollTop, clientHeight } = document.documentElement;

  const topEtapes = etapes.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topEtapes).toFixed() - clientHeight * 0.8) {
    contactStep.classList.add('scrollStep');
    devis.classList.add('scrollStep');
    echange.classList.add('scrollStep');
    realisation.classList.add('scrollStep');
    validation.classList.add('scrollStep');
    livraison.classList.add('scrollStep');
  }
})

// Animation H2
// ==================================================

// About

const h2About = document.querySelector('#about h2');

const about = document.querySelector('#about');


window.addEventListener('scroll', () => {

  const { scrollTop, clientHeight } = document.documentElement;

  const topAbout = about.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topAbout).toFixed() - clientHeight * 0.8) {
    h2About.classList.add('tracking-in-contract');
  }
})


// Services

const h2Services = document.querySelector('#services h2');

window.addEventListener('scroll', () => {

  const { scrollTop, clientHeight } = document.documentElement;

  const topServices = services.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topServices).toFixed() - clientHeight * 0.8) {
    h2Services.classList.add('tracking-in-contract');
  }
})

// Contact

const h2Contact = document.querySelector('#contact h2');


window.addEventListener('scroll', () => {

  const { scrollTop, clientHeight } = document.documentElement;

  const topContact = contact.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topContact).toFixed() - clientHeight * 0.8) {
    h2Contact.classList.add('tracking-in-contract');
  }
})


// Bouton Back To Top
// ==================================================

const btt = document.querySelector('#btt');
const bttM = document.querySelector('#bttM');
const mentionsLegales = document.querySelector('#mentionsLegales');
const footer = document.querySelector('#footer');

window.addEventListener('scroll', () => {

  const { scrollTop, clientHeight } = document.documentElement;

  const topAbout = about.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topAbout).toFixed() - clientHeight * 0.8) {
    btt.classList.add('showBtt');
  } else {
    btt.classList.remove('showBtt');
  }
})


