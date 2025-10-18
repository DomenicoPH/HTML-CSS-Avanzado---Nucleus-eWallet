gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", (event) => { 
  // gsap code here!
  gsap.to('.header__grafico', {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".header",
        start: "center top",
        end: "bottom+=100 top",
        scrub: true,
      }
  });
});