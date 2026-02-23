import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function News({ match }) {
  console.log('App match', match);
  return <h1>News</h1>;
}

function App() {

  return (
    <Router>
      <Route path={ "/news/:id/:page(\\d+)?" } sensitive={true} component={ News } />
    </Router>
  );
}

export default App;