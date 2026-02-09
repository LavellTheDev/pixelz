
gsap.registerPlugin(SplitText, ScrollTrigger);

let mySplitText = SplitText.create("#split", { type: "words, chars" });

let chars = mySplitText.chars;

gsap.from(chars, {
    yPercent: 200,
    stagger: 0.02,
    ease: 'back.out',
    duration: 2,
})