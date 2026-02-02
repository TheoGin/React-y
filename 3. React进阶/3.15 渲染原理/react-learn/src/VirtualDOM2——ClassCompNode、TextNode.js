import React, { Component } from "react";
import ReactDOM from "react-dom";

class Comp1 extends Component {
  render() {
    return <h1>Comp1</h1>;
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Comp1 />
      </div>
    );
  }
}

const app = <App />;
console.log(app);

ReactDOM.render(app, document.getElementById("root"));

