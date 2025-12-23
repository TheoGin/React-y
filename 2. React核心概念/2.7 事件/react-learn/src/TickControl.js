import React, {Component} from "react";
import Tick from "./Tick";

class TickControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOver: false,
    };
  }

  /**
   * 写在事件处理函数写在元素内看起来太臃肿 ——》提出去 ——》
       Uncaught TypeError: this.setState is not a function
       如果没有特殊处理，在事件处理函数中，this指向undefined
         解决：
           1. 使用bind函数，绑定this
           2. 使用箭头函数
   */
  handleOver = () => { // 结果：handleClick不在原型上，而在对象上
    console.log('handleOver this', this);

    this.setState({
      isOver: true,
    });
  }

  handleClick = () => { // 2. 使用箭头函数
    console.log("点击了");
  }

  render() {
    let status = "正在倒计时";
    console.log("this.state.isOver", this.state.isOver);
    if (this.state.isOver) {
      status = "倒计时完成！";
    }
    return (
      <>
        <Tick onOver={ this.handleOver } onClick={ this.handleClick } />
        <h1>{status}</h1>
      </>
    );
  }

  /*render() {
    console.log("this.state.isOver", this.state.isOver);
    if (this.state.isOver) {
      this.status = "倒计时完成！";
    }
    return (
      <>
        <Tick onOver={
          () => {
            this.setState({
              isOver: true,
            });
          }
        } onClick={
          () => {
            console.log("点击了");
          }
        }/>
        <h1>{this.status}</h1>
      </>
    );
  }*/
}

export default TickControl;