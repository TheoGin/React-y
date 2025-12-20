import React from "react";

export default class Tick extends React.Component {
  // state 初始化的两个地方：
  // 1. 在 constructor 外
  /*state = {
    leftTime: this.props.num,
  };*/
  constructor(props) {
    super(props);
    // 1. 在 constructor 内
    this.state = {
      leftTime: this.props.num, // 先调用 super(props); 便有了 this.props = props
    };
    this.timer = setInterval(() => {
      // 不能直接改变状态：因为React无法监控到状态发生了变化
      // this.state.leftTime--;

      // 必须使用this.setState({})改变状态。一旦调用了this.setState，会导致当前组件重新渲染
      this.setState({
        leftTime: this.state.leftTime - 1,
      });
      if (this.state.leftTime === 0) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  render() {
    return <h1>倒计时：{this.state.leftTime}</h1>;
  }
}

