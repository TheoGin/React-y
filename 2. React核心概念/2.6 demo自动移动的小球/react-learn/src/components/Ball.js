import React from "react";
import "./ball.css";

class Ball extends React.Component {

  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      left: props.left || 0,
      top: props.top || 0,
      xSpeed: props.speed || 300,
      ySpeed: props.speed || 300,
      bg: props.bg || "blue",
      size: props.size || 100,
    };

    const duration = 16;
    setInterval(() => {
      const html = document.documentElement;
      // 位移 = 速度 * 时间 （秒）
      const xDis = this.state.xSpeed * duration / 1000; // 除以 1000 是将毫秒转化为秒
      const yDis = this.state.ySpeed * duration / 1000;
      let newLeft = this.state.left + xDis;
      let newTop = this.state.top + yDis;
      if (newLeft <= 0) {
        newLeft = 0;
        // 改变速度的方向
        this.setState({
          xSpeed: -this.state.xSpeed,
        });

        // Do not mutate state directly. Use setState()
        // this.state.xSpeed = -this.state.xSpeed;
      } else if (newLeft >= html.clientWidth - this.state.size) {
        newLeft = html.clientWidth - this.state.size;
        // 改变速度的方向
        this.setState({
          xSpeed: -this.state.xSpeed,
        });
      }

      if (newTop <= 0) {
        newTop = 0;
        this.setState({
          ySpeed: -this.state.ySpeed,
        });
      } else if (newTop >= html.clientHeight - this.state.size) {
        newTop = html.clientHeight - this.state.size;
        this.setState({
          ySpeed: -this.state.ySpeed,
        });
      }
      // console.log(newLeft, newTop);

      this.setState({
        left: newLeft,
        top: newTop,
      });
    }, duration); // 时间越短越平滑
  }

  render() {
    return (
      <div className={"ball"} style={
        {
          // 可以不写单位 "px"，react 会帮你加上
          // left: this.state.left,
          // top: this.state.top,
          transform: `translate(${this.state.left}px, ${this.state.top}px)`,
          backgroundColor: this.state.bg,
          // backgroundColor: `rgb(192, 168, ${this.props.rgb})`,
          width: this.props.size,
          height: this.props.size,
        }
      }></div>
    );
  }
}

export default Ball;
