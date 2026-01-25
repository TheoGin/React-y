import React from "react";
import ReactDOM from "react-dom";
// import "./style.css";

function ChildB(props) {
  return (
    <div className="child-B">
      <h1>ChildB</h1>
    </div>
  );
}

function ChildA(props) {
  // 插槽：将一个React元素渲染到指定的DOM容器中
  // ReactDOM.createPortal(React元素, 真实的DOM容器)，该函数返回一个React元素
  return ReactDOM.createPortal( (
      <div className="child-a" style={{
        marginTop: 200
      }}>
        <h1>ChildA</h1>
        <ChildB />
      </div>
  ), document.querySelector('.modal'));
}

export default function App(props) {
  return (
    // 1. React中的事件是包装过的
    // 2. 它的事件冒泡是根据虚拟DOM树来冒泡的，与真实的DOM树无关。
    <div onClick={(e) => {
      console.log('App注册的点击事件。触发的事件源：', e.target);
    }}>
      <h1>App</h1>
      <ChildA />
    </div>
  );
}

