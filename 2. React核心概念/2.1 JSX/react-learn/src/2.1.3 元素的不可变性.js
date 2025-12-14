import React from "react";
import ReactDOM from "react-dom";

let num = 1;
setInterval(() => {
  num++;
  // 2. 如果确实需要更改元素的属性，需要重新创建JSX元素
  const divReactEle = (
    <div title="div元素">{
      num
    }</div>
  );
  ReactDOM.render(divReactEle, document.getElementById("root"));
}, 1000);

// console.log(divReactEle); // {$$typeof: Symbol(react.element), type: 'div', key: null, ref: null, props: {…}, …}

// 1. 虽然JSX元素是一个对象，但是该对象中的所有属性不可更改（通过 Object.freeze(...)实现）
// divReactEle.props.children = 2; // TypeError: Cannot assign to read only property 'children' of object '#<Object>'
// divReactEle.props.title = 123 // TypeError: Cannot assign to read only property 'title' of object '#<Object>'