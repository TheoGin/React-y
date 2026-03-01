import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router, Route } from "./react-router-dom";

function Page1() {
  return <h1>Page1</h1>;
}

function Page2() {
  return <h1>Page2</h1>;
}

function Home() {
  return <h1>Home</h1>;
}

function App() {
  return (
    <Router>

      {/* 显示 children */ }
      {/*  <Route path="/page1" component={Page1} render={() => 'render'}>
       children
       </Route> */ }

      {/* 显示 Page1 */ }
      {/* <Route path="/page1" render={() => 'render'} component={Page1}  /> */ }

      {/* 显示 Page1 */ }
      <Route path="/page1" component={Page1} />

      {/* 显示 render */ }
      {/* <Route path="/page1" render={ (cxtValue) => {
        console.log(cxtValue);
        return "render";
      } } /> */}

      <Route path="/page2" component={ Page2 } />
      {/* <Route component={Home} /> */ }
      <Route exact path="/" component={ Home } />
    </Router>
  );
}

export default App;