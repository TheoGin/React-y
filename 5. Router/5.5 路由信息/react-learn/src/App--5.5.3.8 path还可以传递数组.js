import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function A(props) {
  console.log(props.match.path); // /a
  /**
   * http://localhost:3000/a      /a
   * http://localhost:3000/a?page=1&limit=10      /a
   * http://localhost:3000/a/aaa      /a/aaa
   */

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
        <Route path={ ["/a", "/a/aaa", "/a?page=1&limit=10"] } exact component={ A } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;