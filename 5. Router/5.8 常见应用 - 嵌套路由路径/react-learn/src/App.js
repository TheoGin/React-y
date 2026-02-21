import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { routerConfig } from "./RouterConfig";

function User() {
  console.log(routerConfig);
  const userUpdatePath = routerConfig.user.update;
  // console.log('routerConfig.user.update', routerConfig.user.update);
  const userPayPath = routerConfig.user.pay.root;
  return (
    <div>
      <h1>User组件固定的区域</h1>
      <div>
        <Link to={ userUpdatePath }>用户信息 </Link> |
        <Link to={ userPayPath }> 充值</Link>
      </div>
      <div style={{
        width: 500,
        height: 500,
        background: 'lightblue',
        border: '1px solid',
        margin: '0 auto'
      }}>
        {/* User组件变化的区域：根据地址的不同发生变化 */}
        <Route path={ userUpdatePath } component={ UserUpdate } />
        <Route path={ userPayPath } component={ UserPay } />
      </div>
    </div>
  );
}

function UserUpdate() {
  return (
    <div>
      <h1>修改用户信息</h1>
    </div>
  );
}

function UserPay() {
  return (
    <div>
      <h1>付款</h1>
    </div>
  );
}

function App() {

  return (
    <Router>
      {/* <Route path="/user" component={ User } /> */}

      <Route path={ routerConfig.user.root } component={ User } />
      {/* 其他组件 */}
    </Router>
  );
}

export default App;