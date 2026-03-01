import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "./react-router-dom";

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
      <Switch>
        {/* Warning: React does not recognize the `computedMatch` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `computedmatch` instead. If you accidentally passed it from a parent component, remove it from the DOM element. */}
        {/* <p>111</p> */}
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={ Page2 } />
        <Route path="/" component={ Home } />
      </Switch>
    </Router>
  );
}

export default App;