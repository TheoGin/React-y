import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
import ImgContainer from "./ImgContainer";
import SwitchArrow from "./SwitchArrow";
import SwitchDot from "./SwitchDot";

class Banner extends Component {

  // 接收属性类型
  static propTypes = {
    imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
    imgWidth: PropTypes.number.isRequired,
    imgHeight: PropTypes.number.isRequired,
    autoDuration: PropTypes.number.isRequired, // 自动切换时间
    duration: PropTypes.number.isRequired, // 动画总时间，在多少时间内完成切换
  };

  static defaultProps = {
    imgSrcs: [],
    imgWidth: 520,
    imgHeight: 280,
    autoDuration: 2000,
    duration: 500,
  };

  bannerRef = React.createRef();

  state = {
    currentIndex: 0,
  };

  handleSwitch(index) {
    if (index < 0) {
      index = this.props.imgSrcs.length - 1;
    } else if (index > this.props.imgSrcs.length - 1) {
      index = 0;
    }
    this.setState({
      currentIndex: index,
    });
    this.imgContainerRef.switchTo(index);
  };

  handleArrowChange = (direction) => {
    let index;
    if (direction === "left") {
      index = this.state.currentIndex - 1;
    } else {
      index = this.state.currentIndex + 1;
    }
    this.handleSwitch(index);
  };

  render() {
    return (
      <div
        ref={ this.bannerRef }
        className="banner-container"
        style={ {
          width: this.props.imgWidth,
          height: this.props.imgHeight,
        } }
        onMouseEnter={
          () => {
            clearTimeout(this.timer);
          }
        }
        onMouseLeave={ () => {
          this.autoSwitch();
        }
        }
      >
        <ImgContainer
          ref={ this.setImgContainerRef }
          imgSrcs={ this.props.imgSrcs }
          imgWidth={ this.props.imgWidth }
          imgHeight={ this.props.imgHeight }
          duration={ this.props.duration }
        />
        {/* <button onClick={ () => this.handleSwitch(2) }>切换到第3张图片</button>
         <button onClick={ () => this.handleSwitch(1) }>切换到第2张图片</button> */ }

        <SwitchArrow
          currentIndex={ this.state.currentIndex }
          onChange={ this.handleArrowChange }
        />
        <SwitchDot
          total={ this.props.imgSrcs.length }
          currentIndex={ this.state.currentIndex }
          onChange={ (index) => {
            this.handleSwitch(index);
          } }
        />
      </div>
    );
  }

  setImgContainerRef = el => {
    this.imgContainerRef = el;
  };

  componentDidMount() {
    this.autoSwitch();
  }

  autoSwitch = () => {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.handleSwitch(this.state.currentIndex + 1);
    }, this.props.autoDuration);
  };
}

export default Banner;