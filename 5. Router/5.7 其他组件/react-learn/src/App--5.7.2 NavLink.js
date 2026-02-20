import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import "./App.css";

function PageA() {
  return <h1>A页</h1>;
}

function PageB() {
  return <h1>B页</h1>;
}

function NavBar() {
  // 5.7.2 NavLink
  // 是一种特殊的Link，Link组件具备的功能，它都有
  // 它具备的额外功能是：根据当前地址和链接地址，来决定该链接的样式
  // 1. activeClassName: 匹配时使用的类名，不写默认为 active
  // 2. activeStyle: 匹配时使用的内联样式
  // 3. exact: 是否精确匹配
  // 4. sensitive：匹配时是否区分大小写
  // 5. strict：是否严格匹配最后一个斜杠
  return (
    <div>
      {/* <a href="/a" style="margin-right: 20px; color: orange;" aria-current="page" class="selected">去a页</a> */ }
      <NavLink
        exact
        strict
        activeClassName="selected"
        activeStyle={ {
          // color: "orange",
          background: '#ccc'
        } }
        innerRef={ dom => {
          console.log(dom);
        } }
        replace
        to="/a"
        style={ { marginRight: "20px" } }
      >去a页</NavLink>

      {/* <a href="/b?a=1&amp;b=2&amp;c=3#d=4&amp;e=5" aria-current="page" class="active">去b页</a> */ }
      <NavLink replace to={ {
        pathname: "/b",
        search: "a=1&b=2&c=3",
        hash: "d=4&e=5",
        state: "附加的状态信息",
      } }>去b页</NavLink>
    </div>
  );
}

function App() {
  return (
    <Router>
      <NavBar />

      <Route path="/a" component={ PageA } />
      <Route path="/b" component={ PageB } />
    </Router>
  );
}

export default App;