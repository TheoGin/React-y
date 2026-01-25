import React from "react";
// import './style.css'

function ChildB(props) {
  return (
    <div className="child-B">
      <h1>ChildB</h1>
    </div>
  );
}

function ChildA(props) {
  return (
    <div className="child-a">
      <h1>ChildA</h1>
      <ChildB />
    </div>
  );
}

export default function App(props) {
  return (
    <div>
      <h1>App</h1>
      <ChildA />
    </div>
  );
}

