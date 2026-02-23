import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import "./App.css";
import Page2Prompt from "./Page2Prompt";

function App() {

  return (
    <Router
      getUserConfirmation={ (msg, next) => {
        next(window.confirm(msg));
      } }
    >
      <nav className="nav">
        <NavLink to={ "/page1" }>页面1</NavLink>
        <NavLink to={ "/page2" }>页面2</NavLink>
      </nav>
      <div className="container">
        <Route path={ "/page1" } component={ Page1 } />
        {/* <Route path={ "/page2" } component={ Page2Prompt } /> */}
        <Route path={ "/page2" } component={ Page2 } />
      </div>
    </Router>
  );
}

export default App;