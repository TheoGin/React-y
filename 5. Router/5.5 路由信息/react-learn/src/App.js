import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

const Awrapper = withRouter(A);
/* function withRouter(Comp) {
  return function (props) {
    // 获取上下文中的信息
    return <Comp {...props} history={上下文中的history} />
  }
} */

function News(props) {
  return (
    <div>
      <h1>新闻列表</h1>
      {/* 某些组件，并没有直接放到Route中，而是嵌套在其他普通组件中，因此，它的props中没有路由信息 Uncaught TypeError: Cannot read properties of undefined (reading 'push') */}
      <A />

      {/* 1. 将路由信息从父组件一层一层传递到子组件 */}
      <A {...props} />

      {/* 2. 使用react-router提供的高阶组件withRouter，包装要使用的组件，该高阶组件会返回一个新组件，新组件将向提供的组件注入路由信息。 */}
      <Awrapper />
    </div>
  );
}

function A(props) {
  console.log(props); // {}
  return (
    <button onClick={() => {
      props.history.push('/')
    }}>
      跳转到首页
    </button>
  );
}

function Index() {
  return <h1>首页</h1>;
}

function NotFound() {
  return <h1>找不到页面</h1>;
}

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/news" component={ News } />
        <Route path="/" component={ Index } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;