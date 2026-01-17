import React, {Component} from "react";

function WithLog(Comp, str) {
  // 2. 不要在高阶组件内部更改传入的组件（会给使用者带来使用负担，需要考虑那个不能写，等等覆盖了原型上的componentDidMount函数）
  /*Comp.prototype.componentDidMount = function () {
    // ...
  }*/

  return class WithLogWrapper extends Component {

    componentDidMount() {
      console.log(`日志：组件${Comp.name}被创建了！，时间为：${Date.now()}`);
    }

    componentWillUnmount() {
      console.log(`日志：组件${Comp.name}被销毁了！，时间为：${Date.now()}`);
    }

    render() {
      return (
        <>
          <h1>{str}</h1>
          <Comp {...this.props} />
        </>
      );
    }
  };
}

export default WithLog;