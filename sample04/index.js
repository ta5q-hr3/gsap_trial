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


/*
Standard Stagger 16
propaties : topLevelRepeat
*/
const elmtopLevelRepeat = document.querySelectorAll(".element__parent.topLevelRepeat .rect");

gsap.from(
  elmtopLevelRepeat,
  {
    opacity:0,
    //y:-20,
    scale:0.1,
    ease:"power4.out",
    duration:2,
    repeat:8,
    //repeatDelay:1,
    stagger: {
      //amount:0.2,
      each:0.2,
      from:"center",
      grid:"auto",
    }
  }
);


/*
Standard Stagger 17
propaties : repeat
*/
const elmobjectRepeat = document.querySelectorAll(".element__parent.objectRepeat .rect");

gsap.from(
  elmobjectRepeat,
  {
    opacity:0,
    //y:-20,
    scale:0.1,
    ease:"power4.out",
    duration:2,
    repeat:8,
    //repeatDelay:1,
    stagger: {
      //amount:0.2,
      each:0.2,
      from:"center",
      grid:"auto",

      repeat:-1,
    }
  }
);


/*
Standard Stagger 18
propaties : repeat yoyo
*/
const elmobjectRepeatYoyo = document.querySelectorAll(".element__parent.objectRepeatYoyo .rect");

gsap.from(
  elmobjectRepeatYoyo,
  {
    opacity:0,
    //y:-20,
    scale:0.1,
    ease:"power4.out",
    duration:2,
    repeat:8,
    //repeatDelay:1,
    stagger: {
      //amount:0.2,
      each:0.2,
      from:"center",
      grid:"auto",

      repeat:-1,
      yoyo:true,
    }
  }
);



