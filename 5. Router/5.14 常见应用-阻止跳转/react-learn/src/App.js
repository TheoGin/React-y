import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import "./App.css";

function App() {

  return (
    <Router
      getUserConfirmation={ (msg, next) => {
        next(window.confirm(msg));
      } }
    >
      <NavLink to={ "/page1" }>页面1</NavLink>
      <NavLink to={ "/page2" }>页面2</NavLink>
      <Route path={ "/page1" } component={ Page1 } />
      <Route path={ "/page2" } component={ Page2 } />
    </Router>
  );
}

export default App;