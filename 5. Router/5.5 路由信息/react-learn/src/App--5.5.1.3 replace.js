import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function A(props) {
  return (
    <div>
      <h1>组件A</h1>
      <button onClick={ () => {
        // 2. replace：将某个新的地址替换掉当前栈中的地址
        //  replace(location: Path | LocationDescriptor<HistoryLocationState>, state?: HistoryLocationState): void;
        props.history.replace("/b", "组件A触发的跳转，传递过来的 state");
      } }>跳转到/b
      </button>
    </div>
  );
}

function B(props) {
  return (
    <div>
      <h1>组件B</h1>
      <p>获取状态数据: { props.location.state }</p>
      <button onClick={ () => {
        props.history.replace("/a");
      } }>跳转到/a
      </button>
    </div>
  );
}

function NotFound() {
  return <h1>找不到页面</h1>;
}

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/a" component={ A } />
        <Route path="/b" component={ B } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;