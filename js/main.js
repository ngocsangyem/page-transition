barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();

        pageTransition();
        await delay(1500);
        done();
      },

      async enter(data) {
        contentAnimation();
      },

      async one(data) {
        contentAnimation();
      }
    }
  ]
});

contentAnimation();

function pageTransition() {
  const tl = gsap.timeline();

  tl.to(".transition-col-list .transition-col-item", {
    duration: 0.5,
    scale: 1,
    transformOrigin: "bottom left",
    stagger: 0.2
  });

  tl.to(".transition-col-list .transition-col-item", {
    duration: 0.5,
    scale: 0,
    transformOrigin: "bottom left",
    stagger: 0.1,
    delay: 0.1
  });
}

function delay(time) {
  time = time || 2000;

  return new Promise(done => {
    setTimeout(() => {
      done();
    }, time);
  });
}

function contentAnimation() {
  const tl = gsap.timeline();

  tl.from(".left", { duration: 1.5, translateY: 50, opacity: 0 });
  tl.to(
    "img",
    { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
    "-=1.1"
  );
}
