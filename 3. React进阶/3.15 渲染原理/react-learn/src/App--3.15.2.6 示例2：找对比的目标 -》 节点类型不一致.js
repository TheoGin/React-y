import React, { Component } from "react";

class CompA extends Component {

  componentDidMount() {
    console.log("CompA componentDidMount");
  }

  render() {
    console.log("CompA render");
    return <CompAA />;
  }

  componentWillUnmount() {
    console.log("CompA componentWillUnmount");
  }
}

class CompAA extends Component {

  componentDidMount() {
    console.log("CompAA componentDidMount");
  }

  render() {
    console.log("CompAA render");
    return null;
  }

  componentWillUnmount() {
    console.log("CompAA componentWillUnmount");
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
（1、先创建新节点）
CompA render
CompAA render

（2、再卸载旧节点）
CompB componentWillUnmount
CompBB componentWillUnmount

CompAA componentDidMount
CompA componentDidMount
 *  */