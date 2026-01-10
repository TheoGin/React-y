import React from "react";
import "./index.css";

function Index(props) {
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
      if (e.target.className === "modal-container") {
        datas.onClose();
      }
    }}>
      <div className="modal-center">
        {props.children}
      </div>
    </div>
  );
}

export default Index;