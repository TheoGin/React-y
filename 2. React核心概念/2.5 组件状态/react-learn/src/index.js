import Tick from "./components/Tick";
import ReactDOM from "react-dom";
import React from "react";
import A from "./components/Test";


// 子组件的逻辑不应该写在这——》state
/*
function start() {
  let num = 5;
  let timer = setInterval(() => {
    num--;
    if (num < 0) {
      clearInterval(timer);
      return;
    }
    ReactDOM.render(<Tick num={num}/>, document.getElementById("root"));
  }, 1000);
}

start();*/
// ReactDOM.render(<Tick num={5}/>, document.getElementById("root"));
ReactDOM.render(<A />, document.getElementById("root"));