import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function A(props) {
  // 5.5.1.1 为什么没有直接使用history对象（方便模式切换）
  // 1. React-Router中有两种模式：Hash、History，如果直接使用window.history，只能支持一种模式
  // 2. 当使用windows.history.pushState方法时，没有办法收到任何通知，将导致React无法知晓地址发生了变化，结果导致无法重新渲染组件
  console.log(props.history === window.history); // false
  return (
    <div>
      <h1>组件A</h1>
      <button onClick={ () => {
        // 1. push：将某个新的地址入栈（历史记录栈）
        //    1. 参数1：新的地址
        //    2. 参数2：可选，附带的状态数据
        // push(location: Path | LocationDescriptor<HistoryLocationState>, state?: HistoryLocationState): void;
        props.history.push("/b", '组件A触发的跳转，传递过来的 state');
      } }>跳转到/b
      </button>
    </div>
  );
}

function B(props) {
  console.log(props.location); // {pathname: '/b', search: '', hash: '', state: '组件A触发的跳转，传递过来的 state', key: 'jy8i47'}
  return (
    <div>
      <h1>组件B</h1>
      <p>获取状态数据: {props.location.state}</p>
      <button onClick={ () => {
        props.history.push("/a");
      } }>跳转到/a
      </button>
    </div>
  );
}

function NotFound() {
  return <h1>找不到页面</h1>
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