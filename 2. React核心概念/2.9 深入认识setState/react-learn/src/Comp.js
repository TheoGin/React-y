import React, {Component} from "react";

class Comp extends Component {
  state = {
    num: 0,
  };

  handleClick = () => {
    // 1. 把所有的setState当作是异步的
    // 2. 永远不要信任setState调用之后的状态
    // 3. 如果要使用改变之后的状态，需要使用回调函数（setState的第二个参数）
    this.setState((curState) => {
      // 参数 curState 表示当前的状态
      // 该函数的返回结果，会混合（覆盖）掉之前的状态
      // 该函数是异步执行
      return {
        num: curState.num + 1,
      };
    }, () => {
      // 所有状态全部更新完成，并且重新渲染后执行
      console.log("state更新完成", this.state.num);
    });

    // 4. 如果新的状态要根据之前的状态进行运算，使用函数的方式改变状态（setState的第一个函数）
    this.setState((curState) => ({
      num: curState.num + 1,
    }));

    this.setState((curState) => ({
      num: curState.num + 1,
    }));
    /* React会对异步的setState进行优化，将多次setState进行合并（将多次状态改变完成后，再统一对state进行改变，然后触发render）
    render
    render
    state更新完成 3
    render
    state更新完成 6
    render
    state更新完成 9
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