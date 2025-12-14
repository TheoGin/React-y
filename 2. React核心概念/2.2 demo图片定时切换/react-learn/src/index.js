import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import src1 from "./assets/1.jpg";
import src2 from "./assets/2.jpg";
import src3 from "./assets/3.jpg";
// vue 可以直接在 img元素写 "./assets/1.jpg"，但 react 不行，因为打包后路径会变，所有需要用 import

const container = document.getElementById("root");

let index = 0; //显示的图片索引
const imgArr = [src1, src2, src3]; //保存图片路径的数组
let timer; //计时器
start();

/**
 * 根据index的值，显示某张图片（渲染真实DOM）
 */
function render() {
  ReactDOM.render(<img className={"img"} src={imgArr[index]} alt="" />, container);
}

/**
 * 启动计时器，每隔一段时间，切换图片
 */
function start() {
  stop(); // 第一次也先清除一下，防止重复开启
  timer = setInterval(() => {
    index = (index + 1) % imgArr.length;
    // 依赖的数据发生变化之后，重新渲染
    render();
  }, 1000);
}

/**
 * 清除定时器
 */
function stop() {
  clearInterval(timer);
}

container.onmouseenter = function () {
  console.log('onmouseleave');
  stop();
};

container.onmouseleave = function () {
  console.log('onmouseleave');
  start();
};