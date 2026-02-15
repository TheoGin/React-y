import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// /a
function CompA() {
  return <h1>组件A</h1>;
}

// /a/b
function CompB() {
  return <h1>组件B</h1>;
}

// /a/c
function CompC() {
  return <h1>组件C</h1>;
}

// 任意路径
function CompAny() {
  return (
    <h1>
      任意内容 NotFound
      {/* Route组件可以写到任意的地方，只要保证它是Router组件的后代元素 */}
      <Route path="/d" component={ CompD } />
    </h1>
  );
}

function CompD() {
  // Warning: validateDOMNesting(...): <h1> cannot appear as a child of <h1>.
  // return <h1>组件D</h1>;

  return <p>组件D</p>;
}


function App() {
  return (
    <Router>
      <Route sensitive path="/a" exact component={ CompA } />
      <Route path="/a/b" component={ CompB } />
      <Route path="/a/c" component={ CompC } />

      <Route component={ CompAny } />
    </Router>
  );
}

export default App;