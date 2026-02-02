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
    this.imgContainerRef.switchTo(index)
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
      >
        <ImgContainer
          ref={ this.setImgContainerRef }
          imgSrcs={ this.props.imgSrcs }
          imgWidth={ this.props.imgWidth }
          imgHeight={ this.props.imgHeight }
          duration={this.props.duration}
        />
        <button onClick={ () => this.handleSwitch(2) }>切换到第3张图片</button>
        <button onClick={ () => this.handleSwitch(1) }>切换到第2张图片</button>

        <SwitchArrow currentIndex={ this.state.currentIndex } onChange={ this.handleIndex } />
        <SwitchDot imgSrcs={ this.props.imgSrcs } currentIndex={ this.state.currentIndex }
                   onChange={ this.handleIndex } />
      </div>
    );
  }

  setImgContainerRef = el => {
    this.imgContainerRef = el;
  };

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
    if (newIndex >= this.props.imgSrcs.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = this.props.imgSrcs.length - 1;
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