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
    return (
      <div>
        { this.state.arr }
        <button onClick={ () => {
          this.setState({
            arr: [
              <CompItem />,
              ...this.state.arr,
            ],
            nextId: this.state.nextId + 1,
          });
        } }>向数组开头添一项
        </button>
      </div>
    );

  }
}
