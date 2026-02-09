import React, { Component } from "react";

export default class App extends Component {
  state = {
    visible: false,
  };

  render() {
    const h1 = this.state.visible ? <h1>标题</h1> : null;
    return (
      <div>
        { h1 }
        <button onClick={ () => {
          this.setState({
            visible: !this.state.visible,
          });
        } }>显示/隐藏
        </button>
      </div>
    );
    /*
     一开始：
     var oldBtn = document.querySelector('button')

     点击按钮后：
     var newBtn = document.querySelector('button')
     oldBtn === newBtn //  true【没有显示 h1的时候，有空节点 null 占位，以便 oldBtn和 newBtn对比，一样，就不会导致重新创建、卸载】
     *  */
  }

  renderEffectiveBug() {
    /*
     一开始：
     var oldBtn = document.querySelector('button')

     点击按钮后：
     var newBtn = document.querySelector('button')
     oldBtn === newBtn //  false 【h1和 button对比，不一样，导致重新创建、卸载】
     *  */
    if (this.state.visible) {
      return (
        <div>
          <h1>标题</h1>
          <button onClick={ () => {
            this.setState({
              visible: !this.state.visible,
            });
          } }>显示/隐藏
          </button>
        </div>
      );
    }
    return (
      <div>
        <button onClick={ () => {
          this.setState({
            visible: !this.state.visible,
          });
        } }>显示/隐藏
        </button>
      </div>
    );
  }
}
