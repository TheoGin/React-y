import React, {Component} from "react";
import Modal from "./common/Modal";

class Test extends Component {
  state = {
    showModal: this.props.showModal || false,
  };

  handleClick = () => {
    this.setState({
      showModal: true,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    if (this.state.showModal) {
      return (
        <Modal onClose={this.handleClose} width={200} height={200} >
          <h2>内容内容内容内容内容内容内容内容……</h2>
        </Modal>
      );
    }
    return (
      <button onClick={this.handleClick}>显示蒙层</button>
    );
  }
}

export default Test;