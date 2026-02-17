import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import qs from 'query-string'

function A(props) {
  // props.location（方便获取）与history.location完全一致，是同一个对象，但是，与window.location不同
  console.log(props.location === props.history.location); // true
  console.log(props.location === window.location); // false

  // location对象中记录了当前地址的相关信息
  // http://localhost:3000/a?a=1&b=2&c=3#d=5&f=7
  console.log(props.location); // {pathname: '/a', search: '?a=1&b=2&c=3', hash: '#d=5&f=7', state: undefined}

  // 我们通常使用第三方库 query-string，用于解析地址栏中的数据
  const search = qs.parse(props.location.search);
  console.log(search); // {a: '1', b: '2', c: '3'}

  const hash = qs.parse(props.location.hash);
  console.log(hash); // {d: '5', f: '7'}

  return (
    <div>
      <h1>组件A</h1>
      <p>
        访问地址：{props.location.pathname}
      </p>
      <p>
        地址参数：a: {search.a}, b: {search.b}, c: {search.c}
      </p>
      <p>
        hash：d: {hash.d}, f: {hash.f}
      </p>
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
        <Route path="/a" component={ A } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;