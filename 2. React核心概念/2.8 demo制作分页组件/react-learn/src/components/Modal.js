import React from "react";
import './Modal.css'

function Modal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className='modal-container'>
      <p>
        加载中……
      </p>
    </div>
  );
}

export default Modal;