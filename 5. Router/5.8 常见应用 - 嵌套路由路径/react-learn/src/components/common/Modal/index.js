import React from "react";
import "./index.css";
import commonTypes from "../../../utils/commonTypes";
import PropTypes from "prop-types";

Modal.defaultProps = { // 默认属性
  bg: "rgba(0, 0, 0, .5)",
};

Modal.propTypes = {
  children: commonTypes.children,
  bg: PropTypes.string,
  onClose: PropTypes.func
}

function Modal(props) {
  return (
    <div className="modal" style={
      {
        background: props.bg,
      }
    } onClick={(e) => {
      // 点击内容不关闭
      if (e.target.className === "modal") {
        // 有传递 onClose 就会点击蒙层时，关闭模态框
        props.onClose();
      }
    }}>
      <div className="modal-center">
        {props.children}
      </div>
    </div>
  );
}

export default Modal;