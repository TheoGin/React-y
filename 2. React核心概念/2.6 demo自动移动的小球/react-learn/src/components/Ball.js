import React from "react";
import "./ball.css";

class Ball extends React.Component {
  state = {
    left: this.props.left,
    top: this.props.top,
    leftSpeed: this.props.speed || 30,
    topSpeed: this.props.speed || 30,
    size: this.props.size || 50,
  };

  constructor(props) {
    super(props);
    const html = document.documentElement;
    setInterval(() => {
      const left = this.state.left + this.state.leftSpeed;
      if (left >= html.clientWidth - this.state.size) {
        this.state.leftSpeed = -this.state.leftSpeed;
      }
      if (left <= 0) {
        this.state.leftSpeed = -this.state.leftSpeed;
      }
      const top = this.state.top + this.state.topSpeed;
      // console.log(left, top);
      if (top >= html.clientHeight - this.state.size) {
        this.state.topSpeed = -this.state.topSpeed;
      }
      if (top <= 0) {
        this.state.topSpeed = -this.state.topSpeed;
      }
      this.setState({
        left,
        top,
      });
    }, 100);
  }

  render() {
    return (
      <div className={"ball"} style={
        {
          /*left: this.state.left + "px",
          top: this.state.top + "px",*/
          transform: `translate(${this.state.left}px, ${this.state.top}px)`,
          backgroundColor: `rgb(192, 168, ${this.props.rgb})`,
        }
      }></div>
    );
  }
}

export default Ball;

/*
function Ball(props) {
  console.log(props);
  return (
    <div className={"ball"} style={
      {
        left: props.left,
        top: props.top,
        backgroundColor: `rgb(192, 168, ${props.rgb})`
      }
    }></div>
  );
}

export default Ball;*/