import React, {Component} from "react";

class WithLogWrapper extends Component {

  componentDidMount() {
    console.log(`组件${this.props.Comp.name}创建完毕，时间为：${Date.now()}`);
  }

  componentWillUnmount() {
    console.log(`组件${this.props.Comp.name}即将被销毁，时间为：${Date.now()}`);
  }

  render() {
    const Comp = this.props.Comp;
    return function () {
      return <Comp/>
    }
  }
}

export default WithLogWrapper;