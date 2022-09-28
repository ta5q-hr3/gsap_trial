// vite を使ってsassをトランスパイルしているので、ここで.scssを読み込みます
import "./style.scss"

import {gsap} from "gsap";

/*
  Easing "back"
*/
const elmOne = document.querySelector(".element__parent.back_one :first-child");
gsap.to(
  elmOne,
  {
    xPercent:500,
    duration:1,
    repeat:8,
    repeatDelay:2,

    ease: "back",
  }
);


/*
  Easing "back" Customize
*/
const elmTwo = document.querySelector(".element__parent.back_two :first-child");
gsap.to(
  elmTwo,
  {
    xPercent:500,
    duration:1,
    repeat:8,
    repeatDelay:2,

    ease: "back.out(5)",
  }
);


/*
  Easing "elastic"
 */
const elmElasticOne = document.querySelector(".element__parent.elastic_one :first-child");
gsap.to(
  elmElasticOne,
  {
    xPercent:500,
    duration:2,
    repeat:8,
    repeatDelay:2,

    ease: "elastic",
  }
);


/*
  Easing "elastic" customize
 */
const elmElasticTwo = document.querySelector(".element__parent.elastic_two :first-child");
gsap.to(
  elmElasticTwo,
  {
    xPercent:500,
    duration:2,
    repeat:8,
    repeatDelay:2,

    ease: "elastic.out(2, 0.3)",
  }
);


/*
  Easing "bounce"
 */
const elmBounceIn = document.querySelector(".element__parent.bounce_in :first-child");
gsap.to(
  elmBounceIn,
  {
    xPercent:500,
    duration:2,
    repeat:8,
    repeatDelay:2,

    ease: "bounce.in",
  }
);

const elmBounceOut = document.querySelector(".element__parent.bounce_out :first-child");
gsap.to(
  elmBounceOut,
  {
    xPercent:500,
    duration:2,
    repeat:8,
    repeatDelay:2,

    ease: "bounce.out",
  }
);

const elmBounceInOut = document.querySelector(".element__parent.bounce_inout :first-child");
gsap.to(
  elmBounceInOut,
  {
    xPercent:500,
    duration:2,
    repeat:8,
    repeatDelay:2,

    ease: "bounce.inOut",
  }
);

