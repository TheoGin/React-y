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
    if (this.state.when) {
      console.log("this.props.history.listen");
      this.unBlock = this.props.history.block(this.state.message);
    }
    this.props.history.listen(() => {
      console.log("this.props.history.listen this.state.when", this.state.when);
    })
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