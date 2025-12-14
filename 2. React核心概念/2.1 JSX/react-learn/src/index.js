import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const content = "<p>this is p element</p><script> console.log(123) < /script> ";
const divReactEle = (
  <div dangerouslySetInnerHTML={
    {
      __html: content
    }
  }></div>
);

ReactDOM.render(divReactEle, document.getElementById("root"));