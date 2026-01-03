import React, {Component} from "react";

class Comp extends Component {
  state = {
    num: 0,
  };

  handleClick = () => {
    this.setState((state) => ({
      num: state.num + 1,
    }));
    this.setState((state) => ({
      num: state.num + 1,
    }));
    this.setState((state) => ({
      num: state.num + 1,
    }));
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={
          this.handleClick
        }>+
        </button>
      </div>
    );
  }
}

export default Comp;