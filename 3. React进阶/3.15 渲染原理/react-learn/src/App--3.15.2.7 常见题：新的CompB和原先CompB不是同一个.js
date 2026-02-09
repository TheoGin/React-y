import React, { Component } from "react";

class CompA extends Component {

  componentDidMount() {
    console.log("CompA componentDidMount");
  }

  render() {
    console.log("CompA render");
    return <CompB />;
  }

  componentWillUnmount() {
    console.log("CompA componentWillUnmount");
  }
}

class CompB extends Component {

  componentDidMount() {
    console.log("CompB componentDidMount");
  }

  render() {
    console.log("CompB render");
    return <CompBB />;
  }

  componentWillUnmount() {
    console.log("CompB componentWillUnmount");
  }
}

class CompBB extends Component {

  componentDidMount() {
    console.log("CompBB componentDidMount");
  }

  render() {
    console.log("CompBB render");
    return null;
  }

  componentWillUnmount() {
    console.log("CompBB componentWillUnmount");
  }
}

export default class App extends Component {
  state = {
    n: 0,
  };

  render() {
    if (this.state.n === 0) {
      return (
        <div>
          <CompB />
          <button onClick={ () => {
            this.setState({
              n: 1,
            });
          } }>设置 n = 1（即渲染 CompB -> CompA）
          </button>
        </div>
      );
    }
    return (
      <CompA />
    );
  }
}


/*
一开始：
CompB render
CompBB render
CompBB componentDidMount
CompB componentDidMount

点击按钮后：
CompA render
CompAA render

CompA render

（1、先创建新节点 CompB）
CompB render
CompBB render

（2、再卸载旧节点 CompB）
CompB componentWillUnmount
CompBB componentWillUnmount

CompBB componentDidMount
CompB componentDidMount
CompA componentDidMount
 *  */