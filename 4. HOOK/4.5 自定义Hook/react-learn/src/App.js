import React, { useState } from "react";
import useTimer from "./myHooks/useTimer";

function TestTimer() {

  useTimer(() => {
    console.log("TestTimer组件的一些副作用函数");
  }, 1000);

  return (
    <h1>TestTimer组件</h1>
  );
}

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      { visible && <TestTimer /> }
      <button onClick={ () => {
        setVisible(!visible);
      } }>隐藏/显示
      </button>
    </div>
  );
}

export default App;