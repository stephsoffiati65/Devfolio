






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



