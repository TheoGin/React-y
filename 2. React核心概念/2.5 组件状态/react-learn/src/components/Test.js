import React, {Component} from "react";

export default class A extends Component {
  state = {
    num: 123,
  };

  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState({
        num: this.state.num - 1,
      });
    }, 1000);
  }

  render() {
    return (
      <>
        <p>A组件：{this.state.num}</p>
        <B num={this.state.num}/>
      </>
    );
  }
}

function B(props) {
  return (
    <>
      <p>B组件：{props.num}</p>
      <C num={props.num}/>
    </>
  );
}

function C(props) {
  return (
    <>
      <p>C组件：{props.num}</p>
    </>
  );
}

