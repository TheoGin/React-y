import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Home from "./Home";
// import News from "./News";
import BetterLink from "./BetterLink";
import RootRouter from "./RootRouter";

function NavBar() {
  return (
    <nav>
      {/* <Link to={ "/" }>首页</Link>
      <Link to={ "/news" }>新闻页</Link> */}
      <BetterLink to={ { name: "home" } }>首页</BetterLink>
      <BetterLink to={ { name: "news" } }>新闻页</BetterLink>
    </nav>
  );
}


function App() {

  return (
    <Router>
      <NavBar />
      {/* <Route path={'/'} exact component={Home} />
       <Route path={'/news'} component={News} /> */ }
      <RootRouter />
    </Router>
  );
}

export default App;