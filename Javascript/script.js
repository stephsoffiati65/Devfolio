
// Animation burger
// ==================================================

        let menu = document.querySelector(".menu")
        let ham = document.querySelector(".ham")
        let xIcon = document.querySelector(".xIcon")
        let burgerIcon = document.querySelector(".burgerIcon")
      
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

// Animation SVG
// ==================================================

const path = document.querySelector('path');


// TypeWriter
// ==================================================

const txtAnim = document.querySelector("#typeWriter")

new Typewriter (txtAnim, {
  loop: true,
  delay: 80,
  deleteSpeed: 60,
})
.typeString ('<strong>FRONT-END</strong>')
.pauseFor(300)
.deleteChars(9)
.typeString('<strong>WORDPRESS</strong>')
.pauseFor(300)
.deleteChars(9)
.typeString('<strong>FREELANCE</strong>')
.pauseFor(300)
.deleteChars(9)

.start()

//////////////////////////////////////

let a = document.querySelector('#burger li a')

a.addEventListener('click', () => { 

menu.style.zIndex = ("-10");

  
    // if (burger.classList.contains("responsive")) {
    //     burger.classList.remove("responsive");
    // } else {
    //     burger.classList.add("responsive");
    //     nav.style.width = ("100%");
    //     rectNav.style.width = ("100%");
    //     iconX.style.display = ("block");
    //     iconX.style.fontSize = ("50px");
    //     iconX.style.color = ("#27282a");
    //     iconI.style.display = ("none");
    //     }
})
