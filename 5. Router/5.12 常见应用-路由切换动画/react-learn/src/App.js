import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./App.css";
// import { CSSTransition } from "react-transition-group";
import "animate.css/animate.css";
import TransitionRoute from "./TransitionRoute";

function Home() {
  return (
    <div className="page home">
      <h1>首页</h1>
    </div>
  );
}

function News() {
  return (
    <div className="page news">
      <h1>新闻页</h1>
    </div>
  );
}

function Personal() {
  return (
    <div className="page personal">
      <h1>个人中心</h1>
    </div>
  );
}

function App() {

  return (
    <Router>
      <div className="router-container">
        <nav className="nav">
          <NavLink exact to={ "/" }>首页</NavLink>
          <NavLink exact to={ "/news" }>新闻页</NavLink>
          <NavLink exact to={ "/personal" }>个人中心</NavLink>
        </nav>
        <div className="comp-container">
          <TransitionRoute exact component={ Home } path={ "/" } />
          <TransitionRoute exact component={ News } path={ "/news" } />
          <TransitionRoute exact component={ Personal } path={ "/personal" } />
          {/* <Route exact component={ Home } path={ "/" } />
           <Route exact component={ News } path={ "/news" } />
           <Route exact component={ Personal } path={ "/personal" } /> */ }
          {/* <Route exact path={ "/" }>
           { ({ match }) => {
           console.log(match);
           return (
           <CSSTransition
           in={ !!match }
           timeout={ 5500 }
           classNames={ {
           enter: "animate__animated animate__fadeIn",
           exit: "animate__animated animate__fadeOut",
           } }
           mountOnEnter
           unmountOnExit
           >
           <Home />
           </CSSTransition>
           );
           } }
           </Route> */ }
        </div>
      </div>
    </Router>
  );
}

export default App;