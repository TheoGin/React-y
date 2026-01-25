import React, { PureComponent } from "react";
import "./style.css";

class MouseMovePanel extends PureComponent {

  divRef = React.createRef();

  state = {
    x: 0,
    y: 0,
  };

  handleMouseMove = (e) => {
    // console.log(e.pageX, e.pageY);
    // 更新x和y的值
    const { left, top } = this.divRef.current.getBoundingClientRect();
    // 得到 移动div 离 box的鼠标距离（pageX会导致滚动条的时候，不是可视区域的距离，所以用 clientX）
    // const x = e.pageX - boundingClientRect.left;
    const x = e.clientX - left - 50; // 减 50 是为了让鼠标在盒子中心
    const y = e.clientY - top - 50;
    this.setState({
      x,
      y,
    });
  };

  render() {
    return (
      <div ref={ this.divRef } className="box" onMouseMove={ this.handleMouseMove }>
        里面盒子里外面的偏移量。x：{ parseInt(this.state.x) }, y: { parseInt(this.state.y) }
      </div>
    );
  }
}

export default MouseMovePanel;