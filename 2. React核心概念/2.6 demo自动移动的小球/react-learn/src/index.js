import ReactDOM from "react-dom";
import React from 'react'
import BallList from "./components/BallList";
function getRandom(min, max) {
  return min + Math.floor(Math.random() * (max - min))
}
window.getRandom = getRandom
ReactDOM.render(<BallList />, document.getElementById('root'))