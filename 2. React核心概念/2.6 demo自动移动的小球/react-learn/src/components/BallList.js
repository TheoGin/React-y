import React, {Component} from "react";
import Ball from "./Ball";
import {getRandom} from "./util";

class Move extends Component {
  state = {
    ballInfos: [],
    size: this.props.size || 100,
  };

  constructor(props) {
    super(props);
    const timer = setInterval(() => {
      const html = document.documentElement;
      const info = {
        left: getRandom(0, html.clientWidth - this.state.size),
        top: getRandom(0, html.clientHeight - this.state.size),
        xSpeed: getRandom(50, 500),
        ySpeed: getRandom(50, 500),
        bg: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`,
        size: this.state.size,
      };
      this.setState({
        ballInfos: [...this.state.ballInfos, info],
      });
      if (this.state.ballInfos.length === 10) {
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    const balls = this.state.ballInfos.map((item, index) => <Ball key={index} {...item} />);
    return (
      <>
        {balls}
      </>
    );
  }
}

export default Move;