import React, {Component} from "react";
import "./index.css";

class Modal extends Component {
  render() {
    return (
      <div className="modal-container">
        <div className="content">
          {this.props.children}
          <button onClick={() => {
            this.props.onClose();
          }}>关闭蒙层
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;