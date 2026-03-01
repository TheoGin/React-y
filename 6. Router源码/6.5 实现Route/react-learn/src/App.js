import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router, Route } from "./react-router-dom";

function Page1() {
  return <h1>Page1</h1>;
}

function Page2() {
  return <h1>Page2</h1>;
}

function Home() {
  return <h1>Home</h1>;
}

function Change({ history }) {
  return (
    <div>
      <button onClick={ () => {
        history.push("/page1");
      } }>去page1
      </button>
      <button onClick={ () => {
        history.push("/page2");
      } }>去page2
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>

      {/* 显示 children，有两种情况 */ }
      {/* <Route path="/page1" component={Page1} render={() => 'render'}>
       {(value) =>{
       console.log(value);
       return null
       }}
       </Route> */ }
      {/* <Route path="/page1" component={Page1} render={() => 'render'}>
       children
       </Route> */ }

      {/* 显示 Page1 */ }
      {/* <Route path="/page1" component={ Page1 } render={ () => "render" } /> */}

      {/* 显示 Page1 */ }
      <Route path="/page1" component={Page1} />

      {/* 显示 render */ }
      {/* <Route path="/page1" render={ (cxtValue) => {
       console.log(cxtValue);
       return "render";
       } } /> */ }

      <Route path="/page2" component={ Page2 } />
      {/* <Route component={Home} /> */ }
      {/* <Route exact path="/" component={ Home } /> */ }

      {/* 没有写 path，无论如何都会匹配 */ }
      <Route component={ Change } />

      <Route path="/" component={ Home } />
    </Router>
  );
}

export default App;