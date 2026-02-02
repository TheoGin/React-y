import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
import ImgContainer from "./ImgContainer";
import SwitchArrow from "./SwitchArrow";
import SwitchDot from "./SwitchDot";

class Banner extends Component {

  static defaultProps = {
    imgSrcs: [],
    width: 520,
    height: 280,
    autoDuration: 2000,
    duration: 500,
  };

  // 接收属性类型
  static propTypes = {
    imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired, // 图片路径数组
    width: PropTypes.number.isRequired, // 容器宽度
    height: PropTypes.number.isRequired, // 容器高度
    autoDuration: PropTypes.number.isRequired, // 自动切换的间隔时间
    duration: PropTypes.number.isRequired, // 动画总时间，完成一次切换需要的时间
  };

  state = {
    currentIndex: 0,
  };

  timer = null; // 自动切换的计时器

  /**
   * 切换到 index
   * @param index
   */
  handleSwitch(index) {
    if (index < 0) {
      index = this.props.imgSrcs.length - 1;
    } else if (index > this.props.imgSrcs.length - 1) {
      index = 0;
    }

    this.setState({
      currentIndex: index,
    });

    // 得到ImgContainer的组件对象，调用其switchTo
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
        className="banner-container"
        style={ {
          width: this.props.width,
          height: this.props.height,
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
          imgWidth={ this.props.width }
          imgHeight={ this.props.height }
          duration={ this.props.duration }
        />
        {/* <button onClick={ () => this.handleSwitch(2) }>切换到第3张图片</button>
         <button onClick={ () => this.handleSwitch(1) }>切换到第2张图片</button> */ }

        <SwitchArrow
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

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  autoSwitch = () => {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.handleSwitch(this.state.currentIndex + 1);
    }, this.props.autoDuration);
  };
}

export default Banner;