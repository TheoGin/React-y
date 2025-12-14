import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
// vue 可以直接在 img元素写 "./assets/1.jpg"，但 react 不行，因为打包后路径会变，所有需要用 import

let index = 0;
const imgArr = [img1, img2, img3];
let div;
let timer = null;
init();


function init() {
  setInterval(() => {
    render();
    if (divDom) {
      console.log('reg');
      registerEvent();
    }
  }, 1000);
}

function render() {
  index = (index + 1) % imgArr.length;
  div = (
    <div className={"container"}>
      <img className={"img"} src={imgArr[index]} alt=""/>
    </div>
  );
  divDom = ReactDOM.render(div, document.getElementById("root"));
}

let divDom = null;
function registerEvent() {
  divDom.onMouseEnter = function () {
    clearInterval(timer);
    timer = null;
  };
  divDom.onMouseLeave = function () {
    init();
  };
}