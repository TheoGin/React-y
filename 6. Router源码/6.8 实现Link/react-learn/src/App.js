import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "./react-router-dom";

function Page1(props) {
  return (
    <div>
      <h1>Page1</h1>
    </div>
  );
}

function Page2(props) {
  return (
    <div>
      <h1>Page2</h1>
    </div>
  );
}

function Nav() {
  return (
    <div>
      <NavLink to={ {
        pathname: '/page1',
        search: '?a=1',
        hash: '#b=2'
      }}>page1</NavLink> |
      <NavLink to={'/page2'}> page2</NavLink>
    </div>
  );
}

function App() {

  return (
    <Router basename={'/news'}>
    {/* <Router> */}
      <Nav />
      <Route path={ "/page1" } component={ Page1 } />
      <Route path={ "/page2" } component={ Page2 } />
    </Router>
  );
}

export default App;