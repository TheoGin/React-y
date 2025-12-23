import React from "react";
import ReactDOM from "react-dom";
import TickControl from "./TickControl";

const tickControl = new TickControl();
console.log(tickControl);
window.tickControl = tickControl
window.TickControl = TickControl

ReactDOM.render(<TickControl />, document.getElementById("root"));