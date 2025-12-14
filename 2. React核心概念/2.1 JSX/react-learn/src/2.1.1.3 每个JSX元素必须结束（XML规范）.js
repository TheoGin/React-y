import React from "react";
import ReactDOM from "react-dom";

//  Line 6:  Parsing error: Unterminated JSX contents
/*const imgReactEle = (
  <img src="https://img2.baidu.com/it/u=181978406,3569624483&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=628" alt="" >
);*/
// 每个JSX元素必须结束（XML规范）
const imgReactEle = (
  <img src="https://img2.baidu.com/it/u=181978406,3569624483&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=628" alt="" />
    );
ReactDOM.render(imgReactEle, document.getElementById("root"));