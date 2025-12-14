import React from "react";
import ReactDOM from "react-dom";

// 表达式用括号括起来，防止没有分号出问题
const h1EleReact = (
  <h1 title="h1元素">
    Hello World <span>span元素</span>
  </h1>
);
// 本质
const h1EleReactEqualAbove = React.createElement(
  "h1",
  { title: "h1元素" },
  "Hello World ",
  React.createElement("span", {}, "span元素")
);

ReactDOM.render(h1EleReact, document.getElementById("root"));
