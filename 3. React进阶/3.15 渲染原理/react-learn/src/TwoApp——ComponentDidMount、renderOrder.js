import React, { Component } from "react";
import ReactDOM from "react-dom";

class Comp1 extends Component {
  render() {
    console.log("Comp1 render");
    return <h1>Comp1</h1>;
  }

  componentDidMount() {
    console.log("Comp1 componentDidMount");
  }
}

class App extends Component {
  render() {
    console.log("App render");
    return (
      <div>
        <Comp1 />
      </div>
    );
  }

  componentDidMount() {
    console.log("App componentDidMount");
  }
}

ReactDOM.render((
  <>
    <App />
    <App />
  </>
), document.getElementById("root"));

/*
 App render
 Comp1 render
 App render
 Comp1 render
 Comp1 componentDidMount
 App componentDidMount
 Comp1 componentDidMount
 App componentDidMount
 *  */