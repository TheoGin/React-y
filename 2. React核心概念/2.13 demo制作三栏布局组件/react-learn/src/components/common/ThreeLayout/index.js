import React from "react";
import './index.css'

function ThreeLayout(props) {
  return (
    <div className='three-layout-container'>
      <div className="left">
        {props.left}
      </div>
      <div className="main">
        {props.children}
      </div>
      <div className="right">
        {props.right}
      </div>
    </div>
  );
}

export default ThreeLayout;