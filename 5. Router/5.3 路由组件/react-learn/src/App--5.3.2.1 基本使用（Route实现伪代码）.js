import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// /a
function CompA() {
  return <h1>组件A</h1>;
}

// /b
function CompB() {
  return <h1>组件B</h1>;
}

// /c
function CompC() {
  return <h1>组件C</h1>;
}

function App() {
  return (
    <Router>
      {/* Route组件: 根据不同的地址，展示不同的组件 */}
      <Route path="/a" component={ CompA } />
      <Route path="/b" component={ CompB } />
      <Route path="/c" component={ CompC } />
    </Router>
  );
}

// Route实现伪代码
/* class Route extends React.Component {
  render() {
    // 是否匹配 this.props.path
    if (isMatched(this.props.path)) {
      const Comp = this.props.component;
      return <Comp />;
    }
    return null;
  }
} */

export default App;