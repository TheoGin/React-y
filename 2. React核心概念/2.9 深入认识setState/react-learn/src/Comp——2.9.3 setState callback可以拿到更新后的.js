import React, {Component} from "react";

class Comp extends Component {
  state = {
    num: 0,
  };

  handleClick = () => {
    this.setState({
      num: this.state.num + 1,
    }, () => {
      // 状态完成改变之后触发，该回调运行在render之后
      console.log("setState callback state更新完成 this.state.num：", this.state.num);
    });
    /*
    render
    render
    setState callback state更新完成 this.state.num： 1 【界面是 1】
    render
    setState callback state更新完成 this.state.num： 2 【界面是 2】
    * */
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={
          this.handleClick
        }>+
        </button>
      </div>
    );
  }
}

export default Comp;