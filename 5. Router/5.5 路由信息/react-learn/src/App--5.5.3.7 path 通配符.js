import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function A(props) {
  console.log(props.match); // {path: '/a/*', url: '/a/dsadsaewa', isExact: true, params: {…}}

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
        {/* http://localhost:3000/a/dsadsaewa */}
        <Route path="/a/*" exact component={ A } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;