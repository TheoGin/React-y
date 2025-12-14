import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import src1 from "./assets/1.jpg";
import src2 from "./assets/2.jpg";
import src3 from "./assets/3.jpg";
// vue 可以直接在 img元素写 "./assets/1.jpg"，但 react 不行，因为打包后路径会变，所有需要用 import

const container = document.getElementById("root");

let index = 0;
const imgArr = [src1, src2, src3];
let timer;
init();


function init() {
  timer = setInterval(() => {
    render();
  }, 1000);
}

function render() {
  index = (index + 1) % imgArr.length;
  ReactDOM.render(<img className={"img"} src={imgArr[index]} alt=""/>, container);
}

container.onmouseenter = function () {
  console.log('enter');
  clearInterval(timer);
  timer = null;
};

container.onmouseleave = function () {
  init();
};