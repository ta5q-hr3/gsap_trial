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

