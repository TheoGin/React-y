import React, { useRef } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

// import Link from "./Link";

function PageA() {
  return <h1>A页</h1>;
}

function PageB() {
  return <h1>B页</h1>;
}

function NavBar() {
  const refB = useRef();
  console.log(refB);

  // 5.7.1 Link: 生成一个无刷新跳转的a元素
  // 1. to
  // 2. replace：bool，表示是否是替换当前地址，默认是false
  // 3. innerRef：可以将内部的a元素的ref附着在传递的对象或函数参数上

  return (
    <div>
      {/* <a href="/a" style={ { marginRight: "20px" } }>去a页</a>
       <a href="/b">去b页</a> */ }

      {/* 1.1. to 字符串：跳转的目标地址 */ }
      {/* 3.1. innerRef 函数 */ }
      <Link innerRef={ dom => {
        console.log(dom);
      } } replace to="/a" style={ { marginRight: "20px" } }>去a页</Link>

      {/*
       1.2. to 对象：
       1.2.1. pathname：url路径
       1.2.2. search
       1.2.3. hash
       1.2.4. state：附加的状态信息
       */ }
      {/* 3.2. innerRef ref对象 */ }
      <Link innerRef={ refB } replace to={ {
        pathname: "/b",
        // search: "?a=1&b=2&c=3",
        search: "a=1&b=2&c=3", // 可以不写 ?
        // hash: "#d=4&e=5",
        hash: "d=4&e=5", // 可以不写 #
        state: "附加的状态信息",
      } }>去b页</Link>
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