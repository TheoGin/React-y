import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Personal from "./Personal";
import ProtectedRoute from "./ProtectedRoute";

function App() {

  return (
    <Router>
      <ul>
        <li>
          <Link to={ "/login" }>
            登录页
          </Link>
        </li>
        <li>
          <Link to={ "/home" }>
            首页
          </Link>
        </li>
        <li>
          <Link to={ "/personal" }>
            个人中心
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={ "/login" } component={ Login } />

        {/* render和children的区别：render是匹配后才会运行，children无论是否匹配都会运行 */}
        {/* <Route path={ "/personal" } render={() => {
          return <h1>abc</h1>; // 返回啥，渲染啥
        }} /> */}
        <ProtectedRoute path={ "/personal" } component={ Personal } />
        <Route path={ "/" } component={ Home } />
      </Switch>
    </Router>
  );
}

export default App;