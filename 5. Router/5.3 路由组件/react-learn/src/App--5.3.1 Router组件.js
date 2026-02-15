import React from "react";

// 1. HashRouter：该组件，使用hash模式匹配
// http://localhost:3000/#/
// import { HashRouter as Router } from "react-router-dom";

// 2. BrowserRouter：该组件，使用BrowserHistory模式匹配
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    // 通常情况下，Router组件只有一个，将该组件包裹整个页面
    <Router>
      <div>1</div>
    </Router>
  );
}

export default App;