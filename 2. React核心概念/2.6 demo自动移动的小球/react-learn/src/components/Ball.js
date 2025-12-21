import React from "react";
import "./ball.css";

/**
 * 一个能够自动移动的小球
 */
class Ball extends React.Component {

  constructor(props) {
    // console.log(props);
    super(props);

    // 属性中需要分别传递横纵坐标上的速度，每秒移动的像素值
    // props.xSpeed,  props.ySpeed
    // 需要传递背景颜色，如果没有传递，则使用蓝色
    this.state = {
      left: props.left || 0, // 横坐标
      top: props.top || 0, // 纵坐标
      xSpeed: props.speed || 300,
      ySpeed: props.speed || 300,
      size: props.size || 100,
    };

    const duration = 16; // 间隔的毫秒数
    setInterval(() => {
      const html = document.documentElement;
      // 位移 = 速度 * 时间 （秒）
      const xDis = this.state.xSpeed * duration / 1000; // 除以 1000 是将毫秒转化为秒
      const yDis = this.state.ySpeed * duration / 1000;

      // 根据速度，改变left和top值
      let newLeft = this.state.left + xDis;
      let newTop = this.state.top + yDis;
      if (newLeft <= 0) {
        newLeft = 0;
        this.setState({
          xSpeed: -this.state.xSpeed, // 横坐标反向
        });

        // Do not mutate state directly. Use setState()
        // this.state.xSpeed = -this.state.xSpeed;
      } else if (newLeft >= html.clientWidth - this.state.size) {
        newLeft = html.clientWidth - this.state.size;
        // 改变速度的方向
        this.setState({
          xSpeed: -this.state.xSpeed, // 横坐标反向
        });
      }

      if (newTop <= 0) {
        newTop = 0;
        this.setState({
          ySpeed: -this.state.ySpeed, // 纵坐标反向
        });
      } else if (newTop >= html.clientHeight - this.state.size) {
        newTop = html.clientHeight - this.state.size;
        this.setState({
          ySpeed: -this.state.ySpeed, // 纵坐标反向
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
          backgroundColor: this.props.bg || 'blue',
          // backgroundColor: `rgb(192, 168, ${this.props.rgb})`,
          width: this.props.size,
          height: this.props.size,
        }
      }></div>
    );
  }
}

export default Ball;
