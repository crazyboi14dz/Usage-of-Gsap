var crsr = document.querySelector("#cursor");
document.addEventListener("mousemove", function (dets) {
  //   console.log(dets.x + "," + dets.y);
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});

gsap.to("#nav", {
  backgroundColor: "rgba(0,0,0,0.7)",
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
    markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
