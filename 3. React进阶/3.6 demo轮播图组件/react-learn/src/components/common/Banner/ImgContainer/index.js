import React, { Component } from "react";
import PropTypes from "prop-types";

class ImgContainer extends Component {
  static propTypes = {
    imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,// 图片路径的数组
    imgWidth: PropTypes.number.isRequired, //单张图片宽度
    imgHeight: PropTypes.number.isRequired, //单张图片高度
    duration: PropTypes.number.isRequired, // 动画总时间，在多长时间内完成动画切换
  };

  /* state = {
   // 效率不好
   marginLeft: 0,
   }; */

  timer = null;// 计时器序号
  tick = 16; // setInterval计时器的间隔时间

  /**
   * 切换到第几张图片
   * 调用该函数，此组件会经过一段动画完成切换
   * @param {*} index 图片下标，从0开始
   */
  switchTo(index) {
    // 效率不好
    /* this.setState({
     marginLeft: -index * this.props.imgWidth,
     }); */

    // 索引边界可能不对，还需要处理一下
    /* if (index < 0) {
     index = 0;
     } else if (index > this.props.imgSrcs.length - 1) {
     index = this.props.imgSrcs.length - 1;
     } */
    // 设置正确的index
    index = index % this.props.imgSrcs.length;

    // const currentMarginLeft = parseFloat(window.getComputedStyle(this.imgContainerDivRef).marginLeft);
    // 1. 得到当前的marginLeft
    let currentMarginLeft = parseFloat(getComputedStyle(this.imgContainerDivRef).marginLeft);

    // 2. 根据index，计算div的最终的 marginLeft
    const targetMarginLeft = -index * this.props.imgWidth;

    // 3. 计算运动的次数
    // 3.1 总移动的次数
    const totalTimes = Math.ceil(this.props.duration / this.tick); // 如 1000 / 10 = 100次，可能是小数，需要向上取整，保证可以移动完
    // 3.2 当前运动的次数
    let currentTimes = 0;

    // 4. 计算每次运动的距离
    // 4.1 总移动的距离（正的就向右移动，负的向左移动）
    const totalDistance = targetMarginLeft - currentMarginLeft;
    // 4.2 每次移动的距离
    const perDistance = totalDistance / totalTimes; // 如 总距离1000 / 100次 = 10
    // let currentDistance = 0; // 错误写法，需要在原来 currentMarginLeft 基础上加，而不是每次从0开始

    // 重复触发 switchTo 的时候，会导致开多个计时器，所以需要先把之前的给清了
    clearInterval(this.timer); // 先停止之前的动画

    // 动画：在多长时间内移动到要移动的距离
    this.timer = setInterval(() => {
      currentTimes++;
      // currentDistance += perDistance; // 错误写法，需要在原来 currentMarginLeft 基础上加，而不是每次从0开始
      currentMarginLeft += perDistance;
      // this.imgContainerDivRef.style.marginLeft = currentDistance + "px"; // 错误写法，需要在原来 currentMarginLeft 基础上加，而不是每次从0开始
      this.imgContainerDivRef.style.marginLeft = currentMarginLeft + "px";

      if (currentTimes === totalTimes) { // 停止运动
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
