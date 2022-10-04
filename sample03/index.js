import "./style.scss";
import {gsap} from "gsap";


/*
  Standard Stagger
*/
const elmStaggersOne = document.querySelectorAll(".element__parent.stagger_one .rect");

gsap.from(
  elmStaggersOne,

  {
    opacity:0,
    y:-20,
    //scale:1.1,
    ease:"power4.out",
    duration:1,
    repeat:8,
    repeatDelay:1,
    stagger: 0.1
  }
);


/*
  Standard Stagger 2
 */
const elmStaggersTwo = document.querySelectorAll(".element__parent.stagger_two .rect");

gsap.from(
  elmStaggersTwo,

  {
    opacity:0,
    y:-20,
    //scale:0.1,
    ease:"power4.out",
    duration:1,
    repeat:8,
    repeatDelay:1,
    stagger: -0.1
  }
);


/*
  Standard Stagger 3
  propaties : amount
 */
const elmStaggersThree = document.querySelectorAll(".element__parent.stagger_three .rect");

gsap.from(
  elmStaggersThree,

  {
    opacity:0,
    y:-20,
    //scale:0.1,
    ease:"power4.out",
    duration:1,
    repeat:8,
    repeatDelay:1,
    stagger: {
      amount:2
    }
  }
);


/*
  Standard Stagger 4
  propaties : each
*/
const elmStaggersFour = document.querySelectorAll(".element__parent.stagger_four .rect");

gsap.from(
  elmStaggersFour,

  {
    opacity:0,
    y:-20,
    //scale:0.1,
    ease:"power4.out",
    duration:1,
    repeat:8,
    repeatDelay:1,
    stagger: {
      each:1
    }
  }
);


/*
Standard Stagger 4
propaties : from index
*/
const elmStaggersFive = document.querySelectorAll(".element__parent.stagger_five .rect");

gsap.from(
  elmStaggersFive,

  {
    opacity:0,
    y:-20,
    //scale:0.1,
    ease:"power4.out",
    duration:1,
    repeat:8,
    repeatDelay:1,
    stagger: {
      each:0.3,
      from:4,
      //from:"random",
    }
  }
);