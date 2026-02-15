import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// /a
function CompA() {
  return <h1>组件A</h1>;
}

// /a/b
function CompB() {
  return <h1>组件B</h1>;
}

// /a/c
function CompC() {
  return <h1>组件C</h1>;
}

// 任意路径
function CompAny() {
  return <h1>任意内容 NotFound</h1>;
}


function App() {
  return (
    // 1. path：匹配的路径
    <Router>
      {/* 1.1. 默认情况下，不区分大小写，可以设置sensitive属性为true，来区分大小写 */}
      <Route sensitive path="/a" exact component={ CompA } />
      {/* 1.2. 默认情况下，只匹配初始目录，如果要精确匹配，配置exact属性为true
       - 如果都不加 exact 属性，http://localhost:3000/a/b 会匹配 CompA 和 CompB  */}
      <Route path="/a/b" exact component={ CompB } />
      <Route path="/a/c" exact component={ CompC } />

      {/* 1.3. 如果不写path，则会匹配任意路径 */}
      <Route component={ CompAny } />
    </Router>
  );
}

export default App;