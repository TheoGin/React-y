import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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


function App() {
  return (
    <Router>
      <Switch>
        {/* 不能在Switch的子元素中使用除Route外的其他组件。
         Warning: React does not recognize the `computedMatch` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `computedmatch` instead. If you accidentally passed it from a parent component, remove it from the DOM element. */}
        {/* <div>123</div> */}

        {/* 写到Switch组件中的Route组件，当匹配到第一个Route后，会立即停止匹配。如：
         http://localhost:3000/a 匹配到 组件A 就结束，不会再显示 CompAny组件
         */}
        <Route sensitive path="/a" exact component={ CompA } />
        <Route path="/a/b" component={ CompB } />
        <Route path="/a/c" component={ CompC } />
        <Route component={ CompAny } />
      </Switch>
    </Router>
  );
}

export default App;