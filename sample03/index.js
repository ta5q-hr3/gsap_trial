import "./style.scss";
import {gsap} from "gsap";


/*
  Standard Stagger
*/
const elmStaggersOne = document.querySelectorAll(".element__parent.stagger_one .rect");

// 落下アニメーションなので.from を使用しています。
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
Standard Stagger 5
propaties : from index
*/
const elmStaggersFive = document.querySelectorAll(".element__parent.stagger_five .rect");

gsap.from(
  elmStaggersFive,

  {
    opacity:0,
    y:-20,
    //scale:0.1,
    ease:"bounce.out",
    duration:1,
    repeat:8,
    repeatDelay:1,
    stagger: {
      each:0.3,
      from:4,
    }
  }
);


/*
Standard Stagger 6
propaties : from start
*/
const elmStaggerSix = document.querySelectorAll(".element__parent.stagger_six .rect");

gsap.from(
  elmStaggerSix,
  {
    opacity:0,
    y:-20,
    //scale:0.1,
    ease:"bounce.out",
    duration:1,
    repeat:8,
    repeatDelay:1,
    stagger: {
      each:0.3,
      from:"start",
    }
  }
);


/*
Standard Stagger 7
propaties : from center
*/
const elmStaggerSeven = document.querySelectorAll(".element__parent.stagger_seven .rect");

gsap.from(
  elmStaggerSeven,
  {
    opacity:0,
    y:-20,
    //scale:0.1,
    ease:"bounce.out",
    duration:1,
    repeat:8,
    repeatDelay:1,
    stagger: {
      each:0.3,
      from:"center",
    }
  }
);


/*
Standard Stagger 8
propaties : from edges
*/
const elmStaggerEight = document.querySelectorAll(".element__parent.stagger_eight .rect");

gsap.from(
  elmStaggerEight,
  {
    opacity:0,
    y:-20,
    //scale:0.1,
    ease:"bounce.out",
    duration:1,
    repeat:8,
    repeatDelay:1,
    stagger: {
      each:0.3,
      from:"edges",
    }
  }
);


/*
Standard Stagger 9
propaties : from random
*/
const elmStaggerNine = document.querySelectorAll(".element__parent.stagger_nine .rect");

gsap.from(
  elmStaggerNine,
  {
    opacity:0,
    y:-20,
    //scale:0.1,
    ease:"bounce.out",
    duration:1,
    repeat:8,
    repeatDelay:1,
    stagger: {
      each:0.3,
      from:"random",
    }
  }
);


/*
Standard Stagger 10
propaties : from end
*/
const elmStaggerTen = document.querySelectorAll(".element__parent.stagger_ten .rect");

gsap.from(
  elmStaggerTen,
  {
    opacity:0,
    y:-20,
    //scale:0.1,
    ease:"bounce.out",
    duration:1,
    repeat:8,
    repeatDelay:1,
    stagger: {
      each:0.3,
      from:"end",
    }
  }
);


/*
Standard Stagger 11
propaties : from end
*/
const elmStaggerEleven = document.querySelectorAll(".element__parent.stagger_eleven .rect");

gsap.from(
  elmStaggerEleven,
  {
    opacity:0,
    y:-20,
    //scale:0.1,
    ease:"bounce.out",
    duration:1,
    repeat:8,
    repeatDelay:1,
    stagger: {
      each:0.1,
      // from array with "grid" propaty
      grid:"auto",
      from:[0.3,0.4],
    }
  }
);

