
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

    const {scrollTop, clientHeight} = document.documentElement;
    const topLeft = slidingLeft.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topLeft).toFixed() - clientHeight * 0.8){
        slidingLeft.classList.add('active')
    }
})

const slidingLeftDos = document.querySelector('.slide-in-left-dos');


window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;
    const topLeft = slidingLeftDos.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topLeft).toFixed() - clientHeight * 0.8){
      slidingLeftDos.classList.add('active')
    }
})

const slidingRight = document.querySelector('.slide-in-right');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;
    const topRight = slidingRight.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topRight).toFixed() - clientHeight * 0.8){
        slidingRight.classList.add('active')
    }
})

const slidingRightDos = document.querySelector('.slide-in-right-dos');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;
    const topRight = slidingRightDos.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topRight).toFixed() - clientHeight * 0.8){
        slidingRightDos.classList.add('active')
    }
})

// TypeWriter
// ==================================================

const txtAnim = document.querySelector("#typeWriter")

new Typewriter(txtAnim, {
  loop: true,
  delay: 80,
  deleteSpeed: 60,
})
  .typeString('<strong>FRONT-END</strong>')
  .pauseFor(300)
  .deleteChars(9)
  .typeString('<strong>WORDPRESS</strong>')
  .pauseFor(300)
  .deleteChars(9)
  .typeString('<strong>FREELANCE</strong>')
  .pauseFor(300)
  .deleteChars(9)

  .start()


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

// Portfolio
// ==================================================

const portfolio = document.querySelector('#portfolio');
const services = document.querySelector('#services');
const greenBurger = document.querySelector('#greenBurger');
const blackBurger = document.querySelector('#blackBurger');


window.addEventListener('scroll', () => {

  const { scrollTop, clientHeight } = document.documentElement;

  const topPortfolio = portfolio.getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topPortfolio).toFixed() - clientHeight * 0.1) {
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
