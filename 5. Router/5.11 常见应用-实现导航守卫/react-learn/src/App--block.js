import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import RouteGuard from "./RouteGuard";

function Page1() {
  return <h1>Page1</h1>;
}

function Page2() {
  return <h1>Page2</h1>;
}

let count = 0;

function App() {

  return (
    // getUserConfirmation?: ((message: string, callback: (ok: boolean) => void) => void) | undefined;
    <Router
      getUserConfirmation={ (message, callback) => {
        callback(window.confirm(message)); // 默认实现
      } }
    >
      <ul>
        <li>
          <Link to={ "/page1" }>页面1</Link>
        </li>
        <li>
          <Link to={ "/page2" }>页面2</Link>
        </li>
      </ul>
      <RouteGuard onPathChange={ (prevLocation, currentLocation, action, unListen, unBlock) => {
        count++;
        console.log(`日志：从${ prevLocation.pathname }进入页面${ currentLocation.pathname }，进入方式${ action }`);
        if (count === 5) {
          unListen();
        }
        unBlock();
      }
      } />
      <Switch>
        <Route path="/page1" component={ Page1 } />
        <Route path="/page2" component={ Page2 } />
      </Switch>
    </Router>
  );
}

export default App;