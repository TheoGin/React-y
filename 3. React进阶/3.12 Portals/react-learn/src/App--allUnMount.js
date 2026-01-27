import React, { Component } from "react";

function Comp3(props) {
  return (
    <div>
      <h1>Comp3</h1>
    </div>
  );
}

function getDatas() {
  return;
}

class Comp2 extends Component {
  render() {
    const datas = getDatas();
    datas.map(item => item);
    return (
      <div>
        <h1>Comp2</h1>
      </div>
    );
  }
}

class Comp1 extends Component {
  render() {
    return (<div>
      <h1>Comp1</h1>
      <Comp2 />
    </div>);
  }
}


export default function App(props) {
  return (
    <div>
      <h1>App1</h1>
      <Comp1 />
      <Comp3 />
    </div>
  );
}

