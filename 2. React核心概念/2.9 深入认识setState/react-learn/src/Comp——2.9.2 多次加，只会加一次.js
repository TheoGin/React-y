import React, {Component} from "react";

class Comp extends Component {
  state = {
    num: 0,
  };

  handleClick = () => {
    this.setState({
      num: this.state.num + 1,
    });
    this.setState({
      num: this.state.num + 1,
    });
    this.setState({
      num: this.state.num + 1,
    });
    // 多次加，只会加一次，每一次拿到的是 this.state.num 是初始的。因为 setState 如果改变状态的代码处于某个HTML元素的事件中，则其是异步的
    console.log('handleClick this.state.num', this.state.num);
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