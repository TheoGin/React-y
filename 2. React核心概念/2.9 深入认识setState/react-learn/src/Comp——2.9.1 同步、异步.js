import React, {Component} from "react";

class Comp extends Component {
  state = {
    num: 0,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState({
        num: this.state.num + 1,
      });
      this.setState({
        num: this.state.num + 1,
      });
      this.setState({
        num: this.state.num + 1,
      });
      // 如果改变状态的代码【不】处于某个HTML元素的事件中，则其是同步的，每一次 setState 都会导致 render重新运行
      console.log("setInterval state更新完成 this.state.num：", this.state.num);
      /*
      render
      render
      render
      render
      setInterval state更新完成 this.state.num： 3
      render
      render
      render
      setInterval state更新完成 this.state.num： 6
      ……
      * */
    }, 1000);
  }

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
    // 多次加，只会加一次，每一次拿到的是 this.state.num 是初始的。因为 setState 如果改变状态的代码处于某个HTML元素的事件中，则其是异步的。最终只会渲染一次
    console.log("handleClick state更新完成 this.state.num：", this.state.num);
    /*
    render
    handleClick state更新完成 this.state.num： 0 【界面是 1】
    render
    handleClick state更新完成 this.state.num： 1【界面是 2】
    render
    handleClick state更新完成 this.state.num： 2【界面是 3】
    render
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