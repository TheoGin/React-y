import React, {Component} from "react";
import Tick from "./Tick";

class TickControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOver: false,
    };
    this.status = "正在倒计时";

    /**
     * 1.1 写在 constructor 里：写在这效率比调用时绑定 this 高，但是写起来会麻烦点
         handleOver // 绑定了this的方法
         handleClick // 绑定了this的方法
          __proto__ 隐式原型 指向 原型（tickControl.__proto__ === TickControl.prototype // true） 【存了两份？目前打印看好像没有。版本优化了？】
           handleOver
           handleClick
     */
    /*this.handleOver = this.handleOver.bind(this)
    this.handleClick = this.handleClick.bind(this)*/
  }

  /**
   * 写在事件处理函数写在元素内看起来太臃肿 ——》提出去 ——》
       Uncaught TypeError: this.setState is not a function
       如果没有特殊处理，在事件处理函数中，this指向undefined
         解决：
           1. 使用bind函数，绑定this
           2. 使用箭头函数
   */
  handleOver() {
    console.log('handleOver this', this);

    this.setState({
      isOver: true,
    });
  }

  handleClick() {
    console.log("点击了");
  }

  render() {
    console.log("this.state.isOver", this.state.isOver);
    if (this.state.isOver) {
      this.status = "倒计时完成！";
    }
    return (
      <>
        {/* 1.2 调用时绑定 this：效率没有写在 constructor 高，但是写起来方便 */}
        <Tick onOver={ this.handleOver.bind(this) } onClick={ this.handleClick.bind(this) } />
        <h1>{this.status}</h1>
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