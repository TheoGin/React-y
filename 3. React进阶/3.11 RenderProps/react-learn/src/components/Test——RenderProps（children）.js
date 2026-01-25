import React from "react";
import MouseListener from "./MouseListener";

function Test(props) {
  return (
    <>
      <MouseListener>
        {
          (state) => {
            return <>里面盒子里外面的偏移量。x：{ parseInt(state.x) }, y: { parseInt(state.y) }</>;
          }
        }
      </MouseListener>
      <MouseListener>
        {
          (state) => {
            return <div className="move" style={ {
              width: 100,
              height: 100,
              background: "#008c8c",
              position: "absolute",
              left: state.x,
              top: state.y,
            } }></div>;
          }
        }
      </MouseListener>
    </>
  );
}

export default Test;