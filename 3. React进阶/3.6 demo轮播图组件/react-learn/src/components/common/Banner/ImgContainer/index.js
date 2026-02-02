import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

class ImgContainer extends Component {
  static propTypes = {
    imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
    imgWidth: PropTypes.number.isRequired,
    imgHeight: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired, // 动画总时间，在多少时间内完成切换
  };

  /* state = {
   // 效率不好
   marginLeft: 0,
   }; */

  timer = null;
  tick = 16; // setInterval运行的频率

  /**
   * 切换到 index，供外部组件调用
   * @param index
   */
  switchTo(index) {
    // 效率不好
    /* this.setState({
     marginLeft: -index * this.props.imgWidth,
     }); */

    // const currentMarginLeft = parseFloat(window.getComputedStyle(this.imgContainerDivRef).marginLeft);
    const currentMarginLeft = parseFloat(getComputedStyle(this.imgContainerDivRef).marginLeft);
    const targetMarginLeft = -index * this.props.imgWidth;
    // 移动的距离（正的就向右移动，负的向左移动）
    const distance = targetMarginLeft - currentMarginLeft;

    const totalTimes = Math.ceil(this.props.duration / this.tick); // 如 1000 / 10 = 100次，可能是小数，需要向上取整，保证可以移动完
    let currentTimes = 0;
    // 每次移动的距离
    const perDistance = distance / totalTimes; // 如 总距离1000 / 100次 = 10
    let currentDistance = 0;

    // 重复触发 switchTo 的时候，会导致开多个计时器，所以需要先把之前的给清了
    clearInterval(this.timer);

    // 动画：在多长时间内移动到要移动的距离
    this.timer = setInterval(() => {
      currentTimes++;
      currentDistance += perDistance;
      this.imgContainerDivRef.style.marginLeft = currentDistance + "px";

      if (currentTimes === totalTimes) {
        // 每次移动的距离算出来如果是小数，可能会有误差，次数越多，误差越大，需要在最后设置为目标距离
        this.imgContainerDivRef.style.marginLeft = targetMarginLeft + "px";
        clearInterval(this.timer);
      }
    }, 16);
  }

  render() {
    const imgs = this.getImgs();

    return (
      <div
        ref={ this.setImgContainerRef }
        className="img-container"
        style={ {
          width: this.props.imgWidth * this.props.imgSrcs.length,
          height: this.props.imgHeight,
          // marginLeft: this.state.marginLeft, // 会导致每次 React比较虚拟DOM，重新运行 render，效率不好 ——》操作真实DOM
        } }
      >
        { imgs }
      </div>
    );
  }

  setImgContainerRef = el => {
    this.imgContainerDivRef = el;
  };

  getImgs() {
    return this.props.imgSrcs.map((src, i) => (
      <img
        key={ i }
        src={ src }
        style={ {
          width: this.props.imgWidth,
          height: this.props.imgHeight,
          float: "left", // 会让 img 变成 display: block
        } }
        alt=""
      />
    ));
  }
}

export default ImgContainer;
