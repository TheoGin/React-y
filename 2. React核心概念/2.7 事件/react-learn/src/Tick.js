import React, {Component} from "react";

class Tick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: props.num || 3,
      isOver: false,
    };
    const timer = setInterval(() => {
      this.setState({
        num: this.state.num - 1,
      });
      if (this.state.num === 0) {
        clearInterval(timer)

        // 倒计时完成回调
        props.onOver && props.onOver();
        console.log('props',props);
      }

    }, 1000);
  }

  render() {
    return (
      <div>
        <h1 onClick={this.props.onClick}>倒计时：{this.state.num}</h1>
      </div>
    );
  }
}

export default Tick;