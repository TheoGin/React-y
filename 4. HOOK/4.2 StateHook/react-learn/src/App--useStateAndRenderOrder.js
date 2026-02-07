import React, { useState } from "react";

export default function App() {

// 1. useState最好写到函数的起始位置，便于阅读
  const [visible, setVisible] = useState(true);
  const [num2, setNum2] = useState(10);

  // 2. useState严禁出现在代码块（判断、循环）中
  if (visible) {
    // React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render  react-hooks/rules-of-hooks
    var [num, setNum] = useState(0);
  }

  useState();
  return (
    <div>
      { num2 }
      <p style={ {
        display: visible ? "block" : "none",
      } }>
        <button onClick={ () => {
          setNum(num - 1);
        } }>-
        </button>
        <span>{ num }</span>
        <button onClick={ () => {
          setNum(num + 1);
        } }>+
        </button>
      </p>
      <button onClick={ () => {
        setVisible(!visible);
      } }>
        显示/隐藏
      </button>
    </div>
  );
}
