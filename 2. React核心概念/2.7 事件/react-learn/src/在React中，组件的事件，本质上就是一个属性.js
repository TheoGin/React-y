import React from "react";
import ReactDOM from "react-dom";

const handleClick = () => {
  console.log("点击了");
};
const handleMouseEnter = () => {
  console.log("鼠标进入");
};
const button = <button onClick={ handleClick } onMouseEnter={ handleMouseEnter }>点我</button>;
ReactDOM.render(button, document.getElementById("root"));