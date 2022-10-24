import "./style.scss";
import {gsap} from "gsap";


/*
Standard Stagger 11
propaties : grid
*/
const elmStaggerGrid = document.querySelectorAll(".element__parent.grid .rect");

gsap.from(
  elmStaggerGrid,
  {
    opacity:0,
    //y:-20,
    scale:0.1,
    ease:"power4.out",
    duration:1,
    repeat:8,
    repeatDelay:1,
    stagger: {
      each:0.1,
      from:"center",
      grid:"auto",
      ease:"power4.out"
    }
  }
);


/*
Standard Stagger 12
propaties : axis x
*/
const elmStaggerAxisX = document.querySelectorAll(".element__parent.axis_x .rect");

gsap.from(
  elmStaggerAxisX,
  {
    opacity:0,
    //y:-20,
    scale:0.1,
    ease:"power4.out",
    duration:1,
    repeat:8,
    repeatDelay:1,
    stagger: {
      each:0.1,
      from:"center",
      grid:"auto",
      ease:"power4.out",

      axis:"x"
    }
  }
);


/*
Standard Stagger 13
propaties : axis y
*/
const elmStaggerAxisY = document.querySelectorAll(".element__parent.axis_y .rect");

gsap.from(
  elmStaggerAxisY,
  {
    opacity:0,
    //y:-20,
    scale:0.1,
    ease:"power4.out",
    duration:1,
    repeat:8,
    repeatDelay:1,
    stagger: {
      each:0.1,
      from:"center",
      grid:"auto",
      ease:"power4.out",

      axis:"y"
    }
  }
);


/*
Standard Stagger 14
propaties : ease (1)
*/
const elmStaggerEaseOne = document.querySelectorAll(".element__parent.easeOne .rect");

gsap.from(
  elmStaggerEaseOne,
  {
    opacity:0,
    //y:-20,
    scale:0.1,
    ease:"power4.out",
    duration:2,
    repeat:8,
    repeatDelay:1,
    stagger: {
      each:0.1,
      from:"center",
      grid:"auto",
      ease:"power2.out",
    }
  }
);


/*
Standard Stagger 15
propaties : ease (2)
*/
const elmStaggerEaseTwo = document.querySelectorAll(".element__parent.easeTwo .rect");

gsap.from(
  elmStaggerEaseTwo,
  {
    opacity:0,
    //y:-20,
    scale:0.1,
    ease:"power4.out",
    duration:2,
    repeat:8,
    repeatDelay:1,
    stagger: {
      each:0.1,
      from:"center",
      grid:"auto",
      ease:"slow",
    }
  }
);