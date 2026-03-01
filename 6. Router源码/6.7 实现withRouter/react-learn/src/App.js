import React from "react";
import { BrowserRouter as Router, Route, withRouter } from "./react-router-dom";

function Change(props) {
  // console.log(props);
  return (
    <div>
      <button onClick={ () => {
        props.history.push("/page2");
      } }>go page2
      </button>
    </div>
  );
}

const ChangeWithRouter = withRouter(Change);

function Page1(props) {
  return (
    <div>
      <h1>Page1</h1>
      <ChangeWithRouter />
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

function App() {

  return (
    <Router>
      <Route path={ "/page1" } component={ Page1 } />
      <Route path={ "/page2" } component={ Page2 } />
    </Router>
  );
}

export default App;