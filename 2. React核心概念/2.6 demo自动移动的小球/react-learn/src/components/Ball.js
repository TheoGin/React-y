import React from "react";
import './ball.css'
import {getRandom} from "./util";
class Ball extends React.Component {
  state ={
    left: this.props.left,
    top: this.props.top,
  }
  constructor(props) {
    super(props);
    const html = document.documentElement;
    // const left = getRandom(0, html.clientWidth - this.props.size);
    // const top = getRandom(0, html.clientHeight - this.props.size);
    setInterval(()=> {
      const left = this.state.left + 5;
      if (left >= html.clientWidth) {
        this.state.left = getRandom(0, html.clientWidth - this.props.size)
      }
      const top = this.state.top + 5;
      console.log(left, top);
      if (top >= html.clientHeight) {
        this.state.top = getRandom(0, html.clientHeight - this.props.size)
      }
      this.setState({
        left,
        top,
      })
    }, 100)
  }
  render() {
    return (
      <div className={"ball"} style={
        {
          left: this.state.left + 'px',
          top: this.state.top + 'px',
          backgroundColor: `rgb(192, 168, ${this.props.rgb})`
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