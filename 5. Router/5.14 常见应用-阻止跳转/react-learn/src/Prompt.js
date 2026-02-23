import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Prompt extends Component {


  state = {
    when: false,
    message: "",
  };

  componentDidMount() {
    this.handleListen();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.handleListen();
    console.log("componentDidUpdate");
  }

  handleListen = () => {
    console.log("handleListen this.state.when", this.state.when);
    this.unListen = this.props.history.listen(() => {
      // if (this.state.when) {
      console.log("block");
      this.unBlock = this.props.history.block(this.state.message);
      // }
    });
  };

  componentWillUnmount() {
    if (this.unBlock) {
      this.unBlock();
    }

    this.unListen && this.unListen();
  }

  render() {
    return null;
  }
}

export default withRouter(Prompt);