import React from "react";
import ReactDOM from "react-dom";

const title = 'h1元素'
const divReactEle = (
  <div>
    <h1 title={ title }>将表达式作为元素属性</h1>
  </div>
)

ReactDOM.render(divReactEle, document.getElementById('root'))