import React from "react";
import { Link, Route, Switch } from "react-router-dom";
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
    // getUserConfirmation 参数：函数
    // getUserConfirmation?: ((message: string, callback: (ok: boolean) => void) => void) | undefined;
    <RouteGuard
      onPathChange={ (prevLocation, currentLocation, action, unListen, unBlock) => {
        count++;
        console.log(`日志${count}：从${ prevLocation.pathname }进入页面${ currentLocation.pathname }，进入方式${ action }`);
        if (count === 5) {
          console.log(555);
          unListen();
        }
        // unBlock();
      } }
      onConfirm={ (prevLocation, currentLocation, action, message, nextPage, unListen, unBlock) => {
        console.log(unListen, unBlock);
        console.log(`页面想要从${ prevLocation.pathname }跳转到${ currentLocation.pathname }，进入方式${ action }，允许跳转`);
        nextPage(true);

        // unBlock();
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
      <Switch>
        <Route path="/page1" component={ Page1 } />
        <Route path="/page2" component={ Page2 } />
      </Switch>
    </RouteGuard>
  );
}

export default App;