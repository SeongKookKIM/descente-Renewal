gsap.from(".letter", 0.8, {
  y: -20,
  opacity: 0,
  ease: "power3.inout",
  stagger: 0.1,
});

gsap.to(".top-left, .top-right", 2, {
  top: "0",
  ease: "power3.inOut",
  delay: 2,
});

gsap.to(".bottom-right", 2, {
  bottom: "0",
  ease: "power3.inOut",
  delay: 2,
});

gsap.to(".top-left", 2, {
  left: "0",
  ease: "power3.inOut",
  delay: 4,
});

gsap.to(".top-right", 2, {
  right: "0",
  ease: "power3.inOut",
  delay: 4,
});

gsap.to(".bottom-right", 2, {
  right: "0",
  ease: "power3.inOut",
  delay: 4,
});

gsap.to(".block-left", 2, {
  left: "-50%",
  ease: "power3.inOut",
  delay: 4,
});

gsap.to(".block-right", 2, {
  right: "-50%",
  ease: "power3.inOut",
  delay: 4,
});
