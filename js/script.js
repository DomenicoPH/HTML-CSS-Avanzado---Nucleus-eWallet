gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", (event) => { 

  // Animaciones Header (al cargar la página...)

  // logo izq. header
  gsap.fromTo('.header__logo', {
    opacity: 0,
    scale: 0.9,
    //x: -200
  },{
    //x: 0,
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: 'sine'
  })

  // header__heading word
  gsap.from('.word',{
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out',
  })

  // header__boton
  gsap.fromTo('.header__boton',
    {
      opacity: 0,
      y: 100,
    },{
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power4.out'
    })

  // navegacion__link
  gsap.from('.navegacion__link', {
    y: -1000,
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
      start: "top top",
      end: "bottom+=100 top",
      scrub: true,
    }
  });


  // Animaciones main class='nucleus'
  gsap.from('.nucleus__heading', {
    y: 600,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.nucleus',
      start: 'top-=200 bottom',
      end: 'top top',
      scrub: true,
      markers: false,
    }
  })

  gsap.from('.nucleus__imagen', {
    y: 3000,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.nucleus',
      start: 'top+=200 bottom',
      end: 'top top',
      scrub: true,
      markers: false,
    }
  })

  gsap.from('#listado-elemento-anim', {
    y: 500,
    duration: 1,
    stagger: .5,
    ease: 'sine',
    scrollTrigger: {
      trigger: '.nucleus',
      start: 'center bottom',
      end: 'center top',
      scrub: false,
      markers: false,
    }
  })


});