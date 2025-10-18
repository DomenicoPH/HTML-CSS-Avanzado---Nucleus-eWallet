gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", (event) => {
 
    // *** TEST ***
    //gsap.to('.green', {rotation: 350, x: 150, duration: 1});
    //gsap.to('.purple', {rotation: 350, x: 175, duration: 1.5});
    //gsap.to('.blue', {rotation: 350, x: 200, duration: 2});
    // *** TEST ***
  
  
    // *** TEST ***
    //gsap.to('.green', {rotation: 350, duration: 5, borderRadius: 50});
    //gsap.to('.purple', {rotation: 350, duration: 5, borderRadius: 50});
    //gsap.to('.blue', {rotation: 350, duration: 5, borderRadius: 50});

    //let tl = gsap.timeline();
    //tl.to('.green', {duration: 1, x: 345})
    //  .to('.purple', {duration: 2, x: 345})
    //  .to('.blue', {duration: 1, x: 345})
    // *** TEST ***


    // *** TEST ***
    let tl = gsap.timeline({
        //delay: 1,
        repeat: -1,
        yoyo: true,
    });
    tl.addLabel('inicio')
      .to('.green', { duration: 1, rotation: -360 }, 1) // (elemento a animar, {propiedades y duración}, posición en timeline)
      .addLabel('medio')
      .to('.purple', { duration: 2, x: -100, ease: 'elastic.out' }, '-=0.75')
      .addLabel('final')
      .to('.blue', { duration: 2, rotation: 360, x: 100, ease: 'expo.out' }, '+=1')
      .to('.green', { duration: 5, rotation: 250 }, 'final')
    // *** TEST ***
 
});