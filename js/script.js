gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", (event) => { 

  // Animaciones Header (al cargar la página...)

  // logo izq. header
  gsap.fromTo('.header__logo, .header__texto', {
    opacity: 0,
    scale: 0.8,
    //x: -200
  },{
    //x: 0,
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: 'sine'
  })

  // navegacion__link
  gsap.from('.navegacion__link', {
    y: -100,
    ease: 'sine',
    delay: .5,
    duration: .8,
    stagger: .2
  })

  // imagen del celular en el header
  gsap.fromTo('.header__grafico', {
    x: 800,
    rotation: 15,
  },{
    x: 0,
    rotation: 0,
    duration: 1.5,
    ease: 'power4.out',
  })

  // imagen de fondo del header
  gsap.fromTo('.header',{
    backgroundPosition: '200% 0%'
  }, {
    backgroundPosition: '100% 0%',
    duration: 1,
    ease: 'power2.out'
  })


  // Animaciones Header (al hacer scroll hacia abajo...)
  gsap.to('.header__grafico', {
    y: -300,
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