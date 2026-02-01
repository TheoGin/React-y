import React, { Component } from "react";
import "./index.css";
import ImgContainer from "./ImgContainer";
import SwitchArrow from "./SwitchArrow";
import SwitchDot from "./SwitchDot";
import { imgPathArr } from "./types";

class Banner extends Component {

  bannerRef = React.createRef();

  // 接收属性类型
  static propTypes = {
    srcs: imgPathArr.srcs.isRequired,
  };

  state = {
    currentIndex: 0,
  };

  render() {
    return (
      <div ref={ this.bannerRef } className="banner-container">
        <ImgContainer srcs={ this.props.srcs } currentIndex={ this.state.currentIndex } />
        <SwitchArrow currentIndex={ this.state.currentIndex } onChange={ this.handleIndex } />
        <SwitchDot srcs={ this.props.srcs } currentIndex={ this.state.currentIndex } onChange={ this.handleIndex } />
      </div>
    );
  }

  componentDidMount() {
    this.startInterval();

    this.bannerRef.current.onmouseenter = () => {
      clearTimeout(this.timer);
    };

    this.bannerRef.current.onmouseleave = () => {
      this.startInterval();
    };
  }

  handleIndex = (index) => {
    let newIndex = index;
    if (newIndex >= this.props.srcs.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = this.props.srcs.length - 1;
    }
    this.setState({
      currentIndex: newIndex,
    });
  };

  startInterval = () => {
    this.timer = setInterval(() => {
      this.handleIndex(this.state.currentIndex + 1);
    }, 2000);
  };
}

export default Banner;