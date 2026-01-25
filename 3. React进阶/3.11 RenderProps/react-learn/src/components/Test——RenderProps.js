import React from "react";
import MouseListener from "./MouseListener";

// 抽离出来，充分利用 PureComponent
const Move = (state) => {
  return <>里面盒子里外面的偏移量。x：{ parseInt(state.x) }, y: { parseInt(state.y) }</>;
};

const Point = (state) => {
// 1. 某个组件，需要某个属性
// 2. 该属性是一个函数，函数的返回值用于渲染
  return <div className="move" style={ {
    width: 100,
    height: 100,
    background: "#008c8c",
    position: "absolute",
    left: state.x,
    top: state.y,
  } }></div>;
};

// 4. 注意纯组件的属性（尽量避免每次传递的render props的地址不一致）
function Test(props) {
  return (
    <>
      {/* 5. 通常该属性的名字叫做render */}
      <MouseListener render={ Move } />
      <MouseListener render={ Point } />
    </>
  );
}

export default Test;