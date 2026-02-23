import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Prompt extends Component {


  // 是 props ，而不是 state
  // state = {
  static defaultProps = {
    when: false, // 当when为true的时候，添加阻塞
    message: "", // 当阻塞时，跳转页面的提示消息
  };

  componentDidMount() {
    this.handleBlock();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.handleBlock();
  }

  handleBlock = () => {
    if (this.props.when) {
      this.unBlock = this.props.history.block(this.props.message);
      // this.unBlock = this.state.history.block(this.state.message);
    }
  };

  componentWillUnmount() {
    if (this.unBlock) {
      this.unBlock();
    }
  }

  render() {
    return null;
  }
}

export default withRouter(Prompt);