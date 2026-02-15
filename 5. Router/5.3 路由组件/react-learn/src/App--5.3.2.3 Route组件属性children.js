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
  return (
    <h1>
      任意内容 NotFound
      <Route path="/d" component={ CompD } />
    </h1>
  );
}

// d
function CompD() {
  return <p>组件D</p>;
}

// 3. children：
function App() {
  return (
    <Router>
      <Route path="/a" exact component={ CompA }>
        {/* 3.1. 传递React元素，无论是否匹配，一定会显示children，并且会忽略component属性，即不会显示 component={ CompA }的内容 */ }
        <h1>abc</h1>
        <p>paragraph</p>
      </Route>

      <Route path="/a/b" component={ CompB }>
        {/* 3.2. 传递一个函数，该函数有多个参数，这些参数来自于上下文，该函数返回react元素，则一定会显示返回的元素，并且忽略component属性 */}
        { () => {
          return <h1 style={ { color: "red" } }>必定会看到的内容</h1>;
        } }
      </Route>
      <Route path="/a/c" component={ CompC } />
      <Route component={ CompAny } />
    </Router>
  );
}

export default App;