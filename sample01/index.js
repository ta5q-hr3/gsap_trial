// vite を使ってsassをトランスパイルしているので、ここで.scssを読み込みます
import "./style.scss"

import {gsap} from "gsap";


/* **********
  一つ目の列にアニメーションを設定します。
  ********** */

// ひとつめの列のwidth
const elm__one = document.querySelector(".element__parent.one");
const elm__one__width = elm__one.clientWidth;

// ひとつめの列の中の .rect
const elm__one__rect = document.querySelector(".element__parent.one :first-child");
// ↑上で取得した要素の長さ(width)
const elm__one__rect__width = elm__one__rect.clientWidth;
const mv__width =  elm__one__width - elm__one__rect__width;


// gsap. "to()" ... 
// to()はトゥイーン終了後の状態を指定するメソッドです
gsap.to(

  // 第１引数にCSSと同じセレクタで処理対象要素を指定します。
  // オブジェクト(配列も可)も指定できます。
  /*
    gsap.to()の第1引数には、セレクターだけではなくさまざまなオブジェクトを指定できます。
    セレクターは、document.querySelectorAll()メソッドとほぼ同じ挙動です。
   */
  //".rect",
  elm__one__rect,

  // 第２引数に処理内容 = 変化させたいプロパティと設定値を指定する。
  {

    // x ... 横方向
    // 数値で指定すると長さ(距離)の単位単位はpxとなります。
    //x: 500,
    // 中身が整数なら変数値でも指定できます。
    x: mv__width,
    // 相対値などの単位付きの場合はクォーテーションでくくります。
    // x: "100%",

    // スタイルプロパティはキャメル式で指定します。
    backgroundColor: "#ddd",

    // durationの単位は秒です(sec)
    duration: 1.5,

    // repeat で繰り返す回数を自然数で指定できます。
    repeat: 5,
    // 繰り返し設定。 -1 で無限。
    //repeat: -1,

    // 繰り返し時の待機時間
    repeatDelay: 1,

    // ★ 以下の "yoyo" を設定するとアニメーションを反復させます。
    //    ちなみに repeatDelay があると反復するまでもディレイします。
    yoyo: true

  }

);




/* **********
  二つ目の列にアニメーションを設定します。
  ********** */

// ふたつめの列の中の .rect
const elm__two__rect = document.querySelector(".element__parent.two :first-child");


gsap.to(
  elm__two__rect,

  // 二つ目の要素の処理
  {
    x: 50,
    y: 50,
    xPercent: 100, // 要素幅に対する指定 x方向  ※ 単位が不要なので注意
    yPercent: -50, // 要素幅に対する指定 y方向
    scale: 0.6, // 60%の大きさに縮小
    //rotate: 360, // 単位を指定しない場合、度数での指定となります
    rotate: "2rad", // rad : 弧度法 での指定はクォーテーションが必要です
    transformOrigin: "bottom right", // アニメーションの基点を指定できます

    // ※ duration を指定しないと、アニメーションしません。当然ながら....
    duration: 2,
    yoyo: true,
    repeat: 5,
    repeatDelay: 1
  }

);



/* ****
  三つ目の列
  **** */

const elm_three = document.querySelector(".element__parent.three :first-child");

gsap.to(

  elm_three,

  {
    //opacity: 0, // 透明度の操作が可能です。
    //alpha: 0, // alphaも透明度のショートハンドとして使用できます opacityとほとんど同じです。
    autoAlpha: 0, // 透明度が0になると visibility が hidden になります。

    duration: 1.5,
    yoyo: true,
    repeat: 8,
    repeatDelay: 3
  }

);



/*
  ************
  Easing
  ************
  四つ目の列
 */

const elm_four = document.querySelector(".element__parent.four :first-child");

// easing 指定は文字列、もしくは関数で指定することができます。
// 関数で指定する場合は、gsapのモジュールインポートのタイミングで使用するモジュールを読み込んでおく必要があります。
// import { gsap, Power4 } from "gsap";
// あとは easeプロパティに 関数指定を記載します。
// Ex: gsap.to( elm, {..., ease: Power4.out} );

gsap.to(
  elm_four,
  {
    duration: 2,
    repeat: 8,
    repeatDelay: 2,
    xPercent:700,
    yoyo:true,

    // ease プロパティでEasingを指定できます。
    // 指定キーワードはいろいろあるようです....
    // . の後ろは過減速指定です。 .in .out .inOut の23種です。
    //ease: "power3.inOut",
    ease: "power4.inOut",
  }
);



/* ****
  五つ目。
  gsap.from()
 **** */

const elm_five = document.querySelector(".element__parent.five :first-child");

// from() メソッドは、トゥイーンの開始位置を指定します。
// 例えば下記の xPersent:600 では、x座標600%の位置からデフォルト位置までのアニメーションを行います。
// つまり、toでは左から右(デフォルト位置から指定座標へ)となるアニメーションが、
// 右から左(指定座標からデフォルト位置へ)のアニメーションとなります。
gsap.from(
  elm_five,
  {
    duration: 2,
    repeat: 8,
    xPercent:600
  }
);


/* ****
  六つ目。
  gsap.fromTo()
 **** */

const elm_six = document.querySelector(".element__parent.six :first-child");

// fromTo() メソッドは開始位置と到達位置を設定できます。
// プロパティ設定 {} が２つになる点に注意してください。
gsap.fromTo(
  elm_six,
  // from
  {
    duration: 1.5,
    xPercent: 500,
    yPercent: 10
  },
  // To
  {
    duration: 2,
    repeat: 8,
    repeatDelay: 2,
    xPercent:-100,
    yPercent:0
  }
);

/*
  番外

  gsap.set( elm, {prop} )

  set() メソッドは指定したプロパティをトゥイーンなしで適用します。
  位置の変更だと瞬間的に移動します。

 */



/* ****
  Stagger プロパティ
 **** */
const elm_seven_childArray = document.querySelectorAll(".element__parent.seven .rect");

gsap.to(
  elm_seven_childArray,
  {
    duration: 4,
    repeat:8,
    repeatDelay:2,
    y: 30,
    autoAlpha: 0,
    ease: "power4.out",


    //stagger: 0.2, // 0.2秒ごとにアニメーションを実行
    // staggerプロパティを使用する際には、十分なアニメーション時間と視覚的に明確な要素数を用意しましょう。
    // 双方が小さな場合には高速なアニメーションとなってしまい、せっかくの遅延実行を肉眼で捉えることができなくなってしまいます。
    stagger: {
      each: 0.3, // アニメーション間隔指定
      //from: "random", // アニメーションを順不同で実行
      from: "center", // アニメーションを指定した要素の順版で、中央からアニメーションを実行
    },
  }
);