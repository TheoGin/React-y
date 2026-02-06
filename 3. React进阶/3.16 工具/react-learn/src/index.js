import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./mock";

ReactDOM.render((
  // StrictMode(React.StrictMode)，本质是一个组件，该组件不进行UI渲染（React.Fragment <> </>），它的作用是，在渲染内部组件时，发现不合适的代码。
  <React.StrictMode>
    <App/>
  </React.StrictMode>
), document.getElementById("root"));