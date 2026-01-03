import React, {Component} from "react";

class Comp extends Component {
  state = {
    num: 0,
  };

  handleClick = () => {
    this.setState({
      num: this.state.num + 1,
    });
    // 还没有重新渲染，说明目前状态仍然没有改变
    console.log('handleClick this.state.num', this.state.num); // 拿到的不是最新的 num，而是上一次的，因为 setState 如果改变状态的代码处于某个HTML元素的事件中，则其是异步的
  };

  render() {
    console.log('render');
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