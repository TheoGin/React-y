import React, { PureComponent } from "react";
import "./style.css";

/**
 * 该组件用于监听鼠标的变化
 */
class MouseListener extends PureComponent {

  divRef = React.createRef();

  state = {
    x: 0,
    y: 0,
  };

  handleMouseMove = (e) => {
    // console.log(e.pageX, e.pageY);
    const boundingClientRect = this.divRef.current.getBoundingClientRect();
    // 得到 移动div 离 box的鼠标距离（pageX会导致滚动条的时候，不是可视区域的距离，所以用 clientX）
    // const x = e.pageX - boundingClientRect.left;
    const x = e.clientX - boundingClientRect.left - 50;
    const y = e.clientY - boundingClientRect.top - 50;
    this.setState({
      x,
      y,
    });
  };

  render() {
    return (
      <div ref={ this.divRef } className="box" onMouseMove={ this.handleMouseMove }>
        {this.props.children ? this.props.children(this.state) : '默认值'}
      </div>
    );
  }
}

export default MouseListener;