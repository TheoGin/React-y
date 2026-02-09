import React, { Component } from "react";

export default class App extends Component {
  state = {
    arr: [3, 5],
  };

  render() {
    const list = this.state.arr.map(item => <li key={ item }>{ item }</li>);
    return (
      <div>
        { list }
        <button onClick={ () => {
          const number = parseInt(Math.random() * 1000);
          this.setState({
            arr: [number, ...this.state.arr],
          });
        } }>向数组第一项添加随机数
        </button>
      </div>
    );

  }
}
