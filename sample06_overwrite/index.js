import "./style.scss";
import {gsap} from "gsap";


/*
const btn = document.querySelector("button.sample1");

// .sample1

btn.addEventListener(
  'mouseenter', 
  ()=> {
  gsap.to(
    btn,
    {
      scaleX: 1.3,
      duration: 0.8,
      backgroundColor: "#fff",
      borderColor: "#333",
      color: "#333",
      overwrite: true
    }
  );
});

btn.addEventListener(
  'mouseleave',
  () => {
    gsap.to(
      btn,
      {
        scale: 1,
        duration: 0.6,
        backgroundColor:"#333",
        borderColor:"#fff",
        color:"#fff",
        overwrite: true
      }
    );
  }
);
*/

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
          duration: 15
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

setType02Events( "one", false);
setType02Events( "two", true );
setType02Events( "three", "auto");


