
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
  delay:90,
  deleteSpeed: 50
})


.typeString ('<strong>FRONT-END</strong>')
.pauseFor(1000)
.deleteChars(9)
.typeString('<strong>WORDPRESS</strong>')
.pauseFor(1000)
.deleteChars(9)
.typeString('<strong>FREELANCE</strong>')
.pause(3000)
.deleteChars(9)
.pause(3000)

.start()