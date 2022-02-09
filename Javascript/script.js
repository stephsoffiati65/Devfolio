
// Animation burger
// ==================================================

        var menu = document.querySelector(".menu")
        var ham = document.querySelector(".ham")
        var xIcon = document.querySelector(".xIcon")
        var burgerIcon = document.querySelector(".burgerIcon")
      
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
            p.style.marginTop =  "60px";
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