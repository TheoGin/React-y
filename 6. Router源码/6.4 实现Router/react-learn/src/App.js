import React from "react";
import { createBrowserHistory } from "./react-router/history";
import { Router } from "./react-router/history/Router";

function Page1() {
  return <h1>Page1</h1>;
}

const history = createBrowserHistory();

function App() {

  return (
    <Router history={ history }>
        aaa
    </Router>
  );
}

export default App;