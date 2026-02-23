import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Prompt extends Component {
  state = {
    val: "",
  };

  handleBlock = (v) => {

    if (v) {
      this.unBlock = this.props.history.block("切换会导致数据丢失");
    } else {
      if (this.unBlock) {
        this.unBlock();
      }
    }
  };


  componentWillUnmount() {
    if (this.unBlock) {
      this.unBlock();
    }
  }

  render() {
    return (
      <div className="page page2">
        <textarea
          value={ this.state.val }
          onChange={ e => {
            this.setState({
              val: e.target.value,
            });
            this.handleBlock(e.target.value);
          } }
        />
      </div>
    );
  }
}

export default withRouter(Prompt);