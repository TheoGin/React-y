import React, {Component} from "react";
import Ball from "./Ball";
import {getRandom} from "./util";

class Move extends Component {
  state = {
    num: 0,
    left: 0,
    top: 0,
    size: 50,
    rgb: 0,
    balls: [],
  };

  constructor(props) {
    super(props);
    const html = document.documentElement;
    let timer = setInterval(() => {
      const left = getRandom(0, html.clientWidth - this.state.size);
      const top = getRandom(0, html.clientHeight - this.state.size);
      const rgb = getRandom(100, 200);
      // const arr = [].push(<Ball left={left} top={top} rgb={rgb}/>)
      console.log(<Ball left={left} top={top} rgb={rgb}/>);
      const n = this.state.num + 1;
      // this.state.balls[n] = <Ball key={n} left={left} top={top} rgb={rgb}/>;
      this.setState({
        num: n,
        balls: this.state.balls.concat([<Ball key={n} left={left} top={top} rgb={rgb} size={this.state.size}/>])
      })
      /*this.setState({
        num: this.state.num - 1,
        left: getRandom(0, html.clientWidth - this.state.size),
        top: getRandom(0, html.clientHeight - this.state.size),
        rgb: getRandom(100, 200),
      });*/
      // console.log(n);
      // console.log(this.state.balls);
      if (this.state.num === this.props.num) {
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <>
        {/*<Ball left={this.state.left} top={this.state.top} rgb={this.state.rgb}/>*/}
        {this.state.balls}
      </>
    );
  }
}

export default Move;