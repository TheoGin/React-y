import ReactDOM from "react-dom";
import React from 'react'
import Move from "./components/Move";
function getRandom(min, max) {
  return min + Math.floor(Math.random() * (max - min))
}
window.getRandom = getRandom
ReactDOM.render(<Move num={10} />, document.getElementById('root'))