import "./style.scss";
import {gsap} from "gsap";



/*
Standard Stagger 19
propaties : function
*/
const elmobjectFunction = document.querySelectorAll(".element__parent.objectFunction .rect");

gsap.from(
  elmobjectFunction,
  {
    opacity:0,
    //y:-20,
    scale:0.1,
    ease:"power4.out",
    duration:0.8,
    repeat:8,
    //repeatDelay:1,
    /*
      @index ... index of target element which in list
      @target ... target element in list
      @list ... element list which is set stagger
     */
    stagger: function ( index, target, list ){
      //target.style.color ="#444444";
      //target.style.backgroundColor ="#ffffff";
      const val = index * 10;
      const styleVal = "-" + val + "px";
      target.innerText = styleVal;
      target.style.marginTop = styleVal;

    },
    /*
    {
      //amount:0.2,
      each:0.2,
      from:"center",
      grid:"auto",

      repeat:-1,
      yoyo:true,

    }
    */

  }
);