import "./style.scss";
import {gsap} from "gsap";

/*

// トゥイーンの定型指定
// トゥイーン ... 共通する内容
let enterTween = {
  scaleX: 1.3,
  duration: 0.8,
  backgroundColor: "#fff",
  borderColor: "#333",
  color: "#333"
}
let leaveTween = {
  scale: 1,
  duration: 0.6,
  backgroundColor:"#333",
  borderColor:"#fff",
  color:"#fff"
}
*/


// example type01

const type01__column = document.querySelector(".example.type01");
const type01__buttons = type01__column.querySelectorAll("button");

//document.querySelectorAll("button").forEach(
type01__buttons.forEach(
  (element) => {

    let overwritePropaty;

    // overwrite しない
    if( element.classList.contains("false")) {
      overwritePropaty= false;
    }
    // overwrite する
    else if( element.classList.contains("true")) {
      overwritePropaty = true;
    }

    // 競合するトゥイーンをを停止
    else if( element.classList.contains("auto")){
      overwritePropaty = "auto";
    }

    // ボタン要素にホバーイベントを追加する
    element.addEventListener(
      'mouseenter',
      () => { gsap.to( element, {
        scaleX: 1.3,
        duration: 0.8,
        backgroundColor: "#fff",
        borderColor: "#333",
        color: "#333",
        overwrite: overwritePropaty
        });
      }
    );
    element.addEventListener(
      'mouseleave',
      () => { gsap.to( element, {
        scale: 1,
        duration: 0.6,
        backgroundColor:"#333",
        borderColor:"#fff",
        color:"#fff",
        overwrite: overwritePropaty
        }); 
      }
    );


  }
);


// -------------------------------
// -------------------------------
// -------------------------------


// example type02

// get example parent Block
const type02__column = document.querySelector(".example.type02");

/*
  @exampleNumber : "one","two","three"
  @iverwriteValue: false, true, "auto"
 */
const setType02Events = ( exampleNumber, overwriteValue ) => {
  const parentColumnClassName = ".pattern." + exampleNumber;

  // get element has class="pattern xxx" 
  const type_column = type02__column.querySelector( parentColumnClassName );
  const slide_element = type_column.querySelector( ".slide-item" );
  // set event to "start" button
  type_column.querySelector(".start").addEventListener(
    'click',
    () => {
      gsap.to(
        slide_element,
        {
          x: type_column.clientWidth,
          rotate: 720,
          duration: 15,
          onComplete: () => {
            gsap.set(
              slide_element,
              {
                x:0,
                rotate: 0
              }
            );
            //slide_element.style.transform = "translate3d(0px,0px,0px)";
          }
        }
      );
    }
  );
  // set event to "inject" button
  type_column.querySelector(".inject").addEventListener(
    'click',
    () => {
      gsap.to(
        slide_element,
        {
          x:0,
          duration: 2,
          overwrite: overwriteValue
        }
      );
    }
  );

}// setType02Events

// set Event to each buttons
setType02Events( "one", false);
setType02Events( "two", true );
setType02Events( "three", "auto");



// -------------------------------
// -------------------------------
// -------------------------------


// example type03

// Event setting method
// @type03listElement ... HTML <li> tags of list example
// @flowBorderElement ... Element of <div class="flowBorder"></div> include by .flowBorder_wrapper
// @overwriteValue ... the value to set gsap's overwrite propaty
const type03EventSetter = ( type03listElement, flowBorderElement, overwriteValue ) => {
  type03listElement.forEach(
    (element) => {
      // set mouse over tween by gsap
      element.addEventListener(

        'mouseenter',
        () => {
          // 1. get target elment's width.
          const elementWidth = element.clientWidth;
          // 2. get target element's offset Left (horizontal distance from parent node's left side)
          const leftPosition = element.offsetLeft;
          //
          // 3. moving flowBorder tween by gsap
          //
          gsap.to(
            flowBorderElement,
            {
              duration: 0.5,
              autoAlpha: 1,
              width: elementWidth,
              left: leftPosition,
              ease: "elastic.out(1, 0.6)",
              //overwrite: false
              //overwrite: true
              //overwrite: "auto"
              overwrite: overwriteValue
            }
          );
        }

      );
      element.addEventListener(

        'mouseleave',
        () => {
          gsap.to(
            flowBorderElement,
            {
              delay: 0.1,
              duration: 0.1,
              autoAlpha: 0,
              overwrite: overwriteValue
            }
          );
        }

      );

    }
  );
}

// set Events to each list block
// @exampleWrapper ... element of <div class="list_sample"> that wrapping the list of example elements
const setType03Event = ( exampleWrapper ) => {

  const menuListElements = exampleWrapper.querySelectorAll("li");
  const flowBorderElement = exampleWrapper.querySelector(".flowBorder");

  if ( exampleWrapper.classList.contains("true") ) {
    type03EventSetter( menuListElements, flowBorderElement, true );
  }
  else if ( exampleWrapper.classList.contains("false") ) {
    type03EventSetter( menuListElements, flowBorderElement, false );
  }
  else if ( exampleWrapper.classList.contains("auto") ) {
    type03EventSetter( menuListElements, flowBorderElement, "auto" );
  }

}


// get example parent Block
const type03__column = document.querySelector(".example.type03");

// get wrapper elements that contain example
const type03__sampleWrapper = type03__column.querySelectorAll(".list_sample");

type03__sampleWrapper.forEach(
  ( wrapper ) => {
    setType03Event( wrapper );
  }
);


/*
const targetListElement = type03__column.querySelector("ul");
// #flowBorder is div#flowBorder
const flowBorder = document.querySelector("#flowBorder");

targetListElement.querySelectorAll("li").forEach(
  
  (element) => {
    
    element.addEventListener(
      'mouseenter',
      () => {

        // tmp
        //console.log("RUN");
        // element.classList.add("on");


        // 1. get target elment's width.
        const elementWidth = element.clientWidth;
        // 2. get target element's offset Left (horizontal distance from parent node's left side)
        const leftPosition = element.offsetLeft;

        //
        // 3. moving flowBorder tween by gsap
        //
        gsap.to(
          flowBorder,
          {
            duration: 0.5,
            autoAlpha: 1,
            width: elementWidth,
            left: leftPosition,
            //ease: "power4.inOut",
            ease: "elastic.out(1, 0.6)",
            //ease: "bounce.inOut",
            
            //overwrite: false
            //overwrite: true
            //overwrite: "auto"

          }
        );

        // . show moving border

        // . 


      }
    );

    element.addEventListener(
      'mouseleave',
      () => {

        gsap.to(
          flowBorder,
          {
            delay: 0.1,
            duration: 0.1,
            autoAlpha: 0,

            //overwrite: false
            overwrite: true
            //overwrite: "auto"
          }
        );
      }
    );

  }

);
*/


