import React from "react";
import MouseListener from "./MouseListener";
import withMouseListener from "./withMouseListener";

// 抽离出来，充分利用 PureComponent
const Move = (props) => {
  return <>里面盒子里外面的偏移量。x：{ parseInt(props.x) }, y: { parseInt(props.y) }</>;
};

const Point = (props) => {
  return <div className="move" style={ {
    width: 100,
    height: 100,
    background: "#008c8c",
    position: "absolute",
    left: props.x,
    top: props.y,
  } }></div>;
};

const MouseMove = withMouseListener(Move);
const MousePoint = withMouseListener(Point);

function Test(props) {
  return (
    <>
      <MouseMove />
      <MousePoint />
    </>
  );
}

export default Test;