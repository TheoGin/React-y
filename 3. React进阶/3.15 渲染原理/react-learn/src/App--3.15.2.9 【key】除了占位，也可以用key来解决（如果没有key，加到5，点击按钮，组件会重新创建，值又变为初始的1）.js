import React, { Component } from "react";

class CompItem extends Component {
  state = {
    n: 1,
  };

  componentDidMount() {
    console.log("CompItem componentDidMount");
  }

  componentWillUnmount() {
    console.log("CompItem componentWillUnmount");
  }

  render() {
    return <div>
      数字：{ this.state.n }
      {/* 方便点加后区分 */}
      <button onClick={ () => {
        this.setState({
          n: this.state.n + 1,
        });
      } }>+
      </button>
    </div>;
  }
}

export default class App extends Component {
  state = {
    arr: [<CompItem />, <CompItem />],
    nextId: 3,
  };

  render() {
    if (this.state.visible) {
      return (
        <div>
          <h1>标题</h1>
          {/* 用相同的key，来保留加之后的 值 还在*/}
          <CompItem key='compItem' />
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
        {/* 用相同的key，来保留加之后的 值 还在*/}
        <CompItem key='compItem' />
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
