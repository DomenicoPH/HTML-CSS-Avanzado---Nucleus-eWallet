gsap.registerPlugin(ScrollTrigger);

gsap.to('.header', {
    backgroundColor: 'rgba(104, 52, 106, 0.9)',
    backdropFilter: 'blur(8px)',
    boxShadow: "0 2px 20px rgba(0, 0, 0, 0.2)",
    duration: 0.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".header",
      start: "top top",
      end: "bottom+=100 top",
      scrub: true,
    }
});