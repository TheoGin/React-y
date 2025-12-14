import React from "react";
import ReactDOM from "react-dom";

// Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>
/*const h1EleReact = (
  <h1>Hello World</h1>
  <span>span元素</span>
);*/

// 1. 用一个元素包起来
/*const h1EleReact = (
  <div>
    <h1>Hello World</h1>
    <span>span元素</span>
  </div>
);*/

// 2. 如果不想要元素，可以用 React.Fragment 碎片
/*const h1EleReact = (
  <React.Fragment>
    <h1>Hello World</h1>
    <span>span元素</span>
  </React.Fragment>
);*/

// 2.1 React.Fragment 碎片 语法糖
const h1EleReact = (
  <>
    <h1>Hello World</h1>
    <span>span元素</span>
  </>
);

ReactDOM.render(h1EleReact, document.getElementById("root"));
