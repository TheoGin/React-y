import React from "react";
import { BrowserRouter as Router, NavLink, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

function PageA() {
  return <h1>A页</h1>;
}

function PageB() {
  return <h1>B页</h1>;
}

function NavBar() {
  return (
    <div>
      <NavLink
        exact
        strict
        activeClassName="selected"
        activeStyle={ {
          // color: "orange",
          background: '#ccc'
        } }
        innerRef={ dom => {
          // console.log(dom);
        } }
        replace
        to="/a"
        style={ { marginRight: "20px" } }
      >去a页</NavLink>

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
  // 5.7.3 Redirect 重定向组件，当加载到该组件时，会自动跳转（无刷新）到另外一个地址
  // 1. to：跳转的地址
  //   1. 字符串
  //   2. 对象
  // 2. push: 默认为false，表示跳转使用替换的方式，设置为true后，则使用push的方式跳转
  // 3. from：当匹配到from地址规则时才进行跳转
  // 4. exact: 是否精确匹配from
  // 5. sensitive：from匹配时是否区分大小写
  // 6. strict：from是否严格匹配最后一个斜杠
  return (
    <Router>
      <NavBar />

      {/* 为什么要加 Switch？ 当 http://localhost:3000/abc/jfaoisrnoaw， 会 http://localhost:3000/a/:id 而不是http://localhost:3000/a/saew  */}
      <Switch>
        <Route path="/a" component={ PageA } />
        <Route path="/b" component={ PageB } />

        {/* 前面两个都没有匹配到时，重定向到 /a */}
        {/* <Redirect to='/a' /> */}

        {/* http://localhost:3000/abc/jfaoisrnoaw 会重定向到 http://localhost:3000/a/jfaoisrnoaw */}
        <Redirect from='/abc/:id' to='/a/:id' />
      </Switch>
    </Router>
  );
}

export default App;