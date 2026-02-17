import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function A(props) {

  // isExact：事实上，当前的路径和路由配置的路径是否是精确匹配的
  console.log('props.match.isExact: ', props.match.isExact); // props.match.isExact:  false

  return (
    <div>
      <h1>组件A</h1>
    </div>
  );
}


function NotFound() {
  return <h1>找不到页面</h1>;
}

function App() {

  return (
    <Router>
      <Switch>
        {/* http://localhost:3000/a/b/c
         props.match.isExact:  false
         */}
        <Route path="/a" component={ A } />

        {/* 并非是加 exact 属性就为 true */}
        {/* <Route path="/a" exact component={ A } /> */}
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;