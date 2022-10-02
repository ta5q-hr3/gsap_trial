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