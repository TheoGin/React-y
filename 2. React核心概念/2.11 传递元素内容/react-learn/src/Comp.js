import React from "react";

function Comp(props) {
  console.log(props); // {content2: {…}, content3: {…}, children: {…}}
  return (
    <div className="comp">
      <h1>组件自身内容</h1>
      {props.children || <h2>默认值</h2>}
      {props.content2}
      {props.content3}
    </div>
  );
}

export default Comp;