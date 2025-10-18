gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", (event) => {
 
  // *** TEST ***
  gsap.to('.green', {rotation: 350, x: 150, duration: 1});
  gsap.to('.purple', {rotation: 350, x: 175, duration: 1.5});
  gsap.to('.blue', {rotation: 350, x: 200, duration: 2});

  let tl = gsap.timeline();
  tl.to('#green', {duration: 1, x: 786})
    .to('#blue', {duration: 2, x: 786})
    .to('#red', {duration: 3, x: 786})
  // *** TEST ***
 
});