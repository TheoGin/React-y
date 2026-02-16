import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={ Login } />

        {/* 此处不能是精确匹配，因为有共用的 Layout */}
        <Route path="/" component={ Admin } />
      </Switch>
    </Router>
  );
}

export default App;