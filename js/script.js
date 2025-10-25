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
    duration: 2,
    ease: 'sine'
  })

  // header__heading word
  gsap.from('.word',{
    opacity: 0,
    y: 20,
    duration: 2,
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
  gsap.from('#nav-header', {
    opacity:0,
    y: -100,
    ease: 'sine',
    delay: .5,
    duration: 1,
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
    opacity:0,
    duration:2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.nucleus',
      start: 'top bottom-=200',
      end: 'top top',
      scrub: false,
      markers: false,
    }
  })

  gsap.fromTo('.nucleus__imagen', {
    y:1000,
  },{
    y:0,
    duration:2,
    ease: 'elastic.out(1,0.7)',
    scrollTrigger: {
      trigger: '.nucleus',
      start: 'top+=600 bottom',
      end: 'top top',
      scrub: false,
      markers: false,
    }
  })

  gsap.from('#listado-elemento-nucleus', {
    y: 500,
    rotate:-10,
    duration: 1.5,
    stagger: .5,
    ease: 'back.out(1.2,1)',
    scrollTrigger: {
      trigger: '.nucleus',
      start: 'top center',
      end: 'center center',
      scrub: false,
      markers: false,
    }
  })

  // Animaciones sección: Seguridad
  gsap.from('.seguridad', {
    y:900,
    ease: 'back.out(1.2,1)',
    duration:.8,
    scrollTrigger: {
      trigger:'.seguridad',
      start:'top-=700 bottom',
      end:'top-=700 center',
      markers:false
    }
  })

  gsap.from('.seguridad__heading', {
    opacity:0,
    duration:2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.seguridad',
      start: 'top bottom+=400',
      end: 'top top',
      scrub: false,
      markers: false,
    }
  })

  gsap.from('#listado-elemento-seguridad',{
    opacity:0,
    duration: 1.5,
    stagger: .5,
    scrollTrigger: {
      trigger:'.seguridad',
      start:'top-=600 center',
      end:'top-=600 center',
      markers:false
    }
  })

  // Animaciones para sección: Comisiones
  gsap.from('.comisiones__heading',{
    opacity:0,
    duration:2,
    scrollTrigger: {
      trigger:'.comisiones',
      start:'top bottom-=300',
      end:'top bottom-=300',
      markers:false,
    }
  })

    const scrollTriggerComisionesTexto = {
      trigger:'.comisiones',
      start:'top top+=300',
      end:'top top+=300',
      markers:false
    }

  gsap.from('.comisiones__imagen',{
    x:1000,
    duration:1,
    ease:'back.out(1,1)',
    scrollTrigger: scrollTriggerComisionesTexto
  })

  gsap.from('.comisiones__texto',{
    opacity:0,
    duration: 3,
    scrollTrigger: scrollTriggerComisionesTexto
  })

  gsap.from('#listado-elemento-comisiones',{
    opacity:0,
    duration: 1.5,
    stagger: .8,
    delay:1,
    scrollTrigger: scrollTriggerComisionesTexto
  })

  // Animaciones para sección: Testimoniales

    const scrollTriggerTestimoniales = {
      trigger:'.testimoniales',
      start:'top bottom-=300',
      end:'top bottom-=300',
      markers:false,
    }

  gsap.from('.testimoniales__heading', {
    opacity:0,
    duration:2,
    scrollTrigger: scrollTriggerTestimoniales
  })

  gsap.from('.testimoniales__grid div', {
    opacity:0,
    y:10,
    duration:1,
    stagger: 0.4,
    scrollTrigger: scrollTriggerTestimoniales 
  })

});