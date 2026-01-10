import React from "react";
import "./index.css";

function Modal(props) {
  const defaultProps = { // 默认属性
    bg: "rgba(0, 0, 0, .5)",
  };
  const datas = Object.assign({}, defaultProps, props);
  return (
    <div className="modal-container" style={
      {
        background: datas.bg,
      }
    } onClick={(e) => {
      // 点击内容不关闭
      if (e.target.className === "modal-container") {
        // 有传递 onClose 就会点击蒙层时，关闭模态框
        datas.onClose();
      }
    }}>
      <div className="modal-center">
        {props.children}
      </div>
    </div>
  );
}

export default Modal;