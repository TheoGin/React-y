import React, { Component } from "react";
import ReactDOM from "react-dom";

class Comp1 extends Component {
  state = {};

  constructor(props) {
    super(props);
    console.log('Comp1 constructor');
  }

  static getDerivedStateFromProps() {
    console.log("Comp1 getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log("Comp1 render");
    return <h1>Comp1</h1>;
  }

  componentDidMount() {
    console.log("Comp1 componentDidMount");
  }
}

class App extends Component {
  state = {};

  constructor(props) {
    super(props);
    console.log('App constructor');
  }


  static getDerivedStateFromProps() {
    console.log("App getDerivedStateFromProps");
    return null;
  }

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
 App constructor
 App getDerivedStateFromProps
 App render

 Comp1 constructor
 Comp1 getDerivedStateFromProps
 Comp1 render

 App constructor
 App getDerivedStateFromProps
 App render

 Comp1 constructor
 Comp1 getDerivedStateFromProps
 Comp1 render

 Comp1 componentDidMount
 App componentDidMount
 Comp1 componentDidMount
 App componentDidMount
 *  */