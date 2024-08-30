var crsr = document.querySelector("#cursor");
var crsrBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  //   console.log(dets.x + "," + dets.y);
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";

  crsrBlur.style.left = dets.x - 250 + "px";
  crsrBlur.style.top = dets.y - 250 + "px";
});

var navItem = document.querySelectorAll("#nav p");

navItem.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "100px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%", // when scroll for bit then it activates the scroll animation effect like color and size
    end: "top -11$", //when scroll back to top color effect will disappear and size back to normal
    scrub: 1, // the color changes directly so add scrub to take time like seconds
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  /*In stagger one by one will come while scrolling
  0.4s delay of every element like about-us-img, about-us-in*/
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 55%",
    scrub: 1,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 55%",
    scrub: 1,
  },
});

gsap.from("#quote1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#quote1",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 2,
  },
});

gsap.from("#quote2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#quote1",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 2,
  },
});

gsap.from("#page4>h4",{
  y:50,
  scrollTrigger:{
    trigger: "#page4>h4",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 70%",
    scrub: 2,
  }
})