import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function User({ match }) {
  console.log(match);
  /* {path: '/user', url: '/user', isExact: true, params: {…}}
  * path: 路径规则（对应 Route 中的 path）
  * url: 真实路径中匹配到规则的那一部分。如 http://localhost:3000/user/update，当前组件匹配到的是 url: '/user'，而不是 '/user/update'
  *  */
  // const userUpdatePath = `${match.path}/update`;
  // const userPayPath = `${match.path}/pay`;
  const userUpdatePath = `${match.url}/update`;
  const userPayPath = `${match.url}/pay`;
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

      <Route path="/u" component={ User } />
      {/* 其他组件 */}
    </Router>
  );
}

export default App;