import React, { Component } from "react";

class App extends Component {
  // 检测过时的 context API
  /* Warning: Legacy context API has been detected within a strict-mode tree.
   The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.
   Please update the following components: App
   Learn more about this warning here: https://fb.me/react-legacy-context
  *  */
  static childContextTypes = {};

  getChildContext() {
    return {};
  }


  constructor(props) {
    super(props);

    /* 副作用：一个函数中，做了一些会影响函数外部数据的事情。例如：
     1. 异步处理（如 setTimeout、setInterval、ajax请求等）
     2. 改变参数值
     3. setState（可能是异步的）
     4. 本地存储
     5. 改变函数外部的变量
     */
    setTimeout(() => { // 异步处理
      // 在严格模式下，虽然不能监控到具体的副作用代码，但它会将不能具有副作用的函数调用两遍，以便发现问题。（这种情况，仅在开发模式下有效）
      console.log("setTimeout");
    });
  }

  // 6. 检测意外的副作用。React要求，副作用代码仅出现在以下生命周期函数中
  //   6.1. ComponentDidMount
  //   6.2. ComponentDidUpdate
  //   6.3. ComponentWillUnMount
  componentDidMount() {
  }

  render() {
    return (
      <div>111
      </div>
    );
  }
}

export default App;