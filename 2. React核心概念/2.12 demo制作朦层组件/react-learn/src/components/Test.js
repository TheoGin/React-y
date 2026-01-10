import React, {Component} from "react";
import Modal from "./common/Modal";

class Test extends Component {
  state = {
    showModal: this.props.showModal || false,
  };

  showModal = () => {
    this.setState({
      showModal: true,
    });
  };

  hideModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const modalComponent =
      <Modal onClose={this.hideModal}>
        <div style={{
          background: "#fff",
        }}>
          <h2>内容内容内容内容内容内容内容内容……</h2>
          <button onClick={this.hideModal}>关闭蒙层</button>
        </div>
      </Modal>;
    return (
      <>
        <img src="https://picx.zhimg.com/v2-b43212979c7b3f8b7aaf8806e9ed30df_r.jpg" alt=""/>
        {this.state.showModal ? modalComponent : null}
        <button onClick={this.showModal}>显示蒙层</button>
      </>
    );
  }
}

export default Test;