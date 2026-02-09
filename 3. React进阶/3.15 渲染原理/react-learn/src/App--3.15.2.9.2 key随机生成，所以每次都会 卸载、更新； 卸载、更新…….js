import React, { Component } from "react";

class CompA extends Component {
  componentDidMount() {
    console.log('CompA componentDidMount');
  }

  componentWillUnmount() {
    console.log('CompA componentWillUnmount');
  }

  render() {
    return <h1>CompA</h1>
  }
}

export default class App extends Component {
  state = {
    visbile: false,
  };

  render() {
    return (
      <div>
        <CompA key={Math.random()} />
        <button onClick={ () => {
          this.setState({});
        } }>点击更新
        </button>
      </div>
    );

  }
}
/*
 一开始：
CompA componentDidMount

点击按钮后：
CompA componentWillUnmount
CompA componentDidMount
（每次key都不一样，所以每次都会重新渲染）
CompA componentWillUnmount
CompA componentDidMount
 *  */