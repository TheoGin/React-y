import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function User() {
  return (
    <div>
      <h1>User组件固定的区域</h1>
      <div>
        <Link to="/user/update">用户信息 </Link> |
        <Link to="/user/pay"> 充值</Link>
      </div>
      <div style={{
        width: 500,
        height: 500,
        background: 'lightblue',
        border: '1px solid',
        margin: '0 auto'
      }}>
        <Route path={ "/user/update" } component={ UserUpdate } />
        <Route path={ "/user/pay" } component={ UserPay } />
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
      {/* vue 中，是用【命名路由 name】来控制，改路径不受影响，但 React没有 */}
      {/* <Route path="/user" component={ User } /> */}

      {/* 会导致 /user/update、pay 也匹配不上 */}
      <Route path="/u" component={ User } />
    </Router>
  );
}

export default App;