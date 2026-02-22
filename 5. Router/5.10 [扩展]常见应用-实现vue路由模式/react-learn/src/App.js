import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Home from "./Home";
// import News from "./News";
import { routesConfig } from "./routesConfig";
import BetterLink from "./BetterLink";

function NavBar() {
  return (
    <div>
      {/* <Link to={ "/" }>首页</Link>
      <Link to={ "/news" }>新闻页</Link> */}
      <BetterLink to={ { name: "home" } }>首页</BetterLink>
      <BetterLink to={ { name: "news" } }>新闻页</BetterLink>
    </div>
  );
}

function getRoutes(routes, basePath) {
  if (!Array.isArray(routes)) {
    return null;
  }

  return routes.map((route, index) => {
    const { component: Component, path, children, ...rest } = route;
    const newPath = (basePath + path).replace(/\/\//, "/");
    return (
      <Route
        key={ index }
        { ...rest }
        path={ newPath }
        render={ () => {
          return <Component children={ getRoutes(children, newPath) } />;
        } }
      />
    );
  });
}

function App() {

  return (
    <Router>
      <NavBar />
      {/* <Route path={'/'} exact component={Home} />
       <Route path={'/news'} component={News} /> */ }
      {
        getRoutes(routesConfig, "/") // "/" 可以适配没有写 /的路径
      }
    </Router>
  );
}

export default App;