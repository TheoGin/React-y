import React, {Component} from "react";

class Comp extends Component {
  state = {
    num: 0,
  };

  handleClick = () => {
    this.setState({
      num: this.state.num + 1,
    }, () => {
      this.setState({
        num: this.state.num + 1,
      }, () => {
        this.setState({
          num: this.state.num + 1,
        }, () => {
          // setState callback可以拿到更新后的 this.state.num
          console.log("setState callback state更新完成 this.state.num：", this.state.num);
        });
      });
    });
    /*
    render
    ③ render
    setState callback state更新完成 this.state.num： 3
    ③ render
    setState callback state更新完成 this.state.num： 6
    ③ render
    setState callback state更新完成 this.state.num： 9
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