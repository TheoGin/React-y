import React, { useState } from "react";

window.arr = [];

function App() {
  console.log("App render");

  // 会导致每次都重新 createRef
  const inputRef = React.createRef();
  window.arr.push(inputRef);

  const [num, setNum] = useState(0);

  return (
    <div>
      <input ref={ inputRef } type="text" />
      <button onClick={ () => {
        console.log(inputRef.current.value);
      } }>得到input的值
      </button>
      <input type="text" value={ num } onChange={ (e) => {
        setNum(parseInt(e.target.value));
      } } />
    </div>
  );
}

export default App;

/* 会导致每次都重新 createRef
 App render
 App render
 App render
 App render
 arr //  (6) [{…}, {…}, {…}, {…}, {…}, {…}] 目前前面的都是 null，只有最后一个才会有DOM，React对这个版本做了优化？× 1）因为你在每次渲染时都调用了 React.createRef()，所以每次都会生成一个新的 ref 对象并推入 window.arr 中。2）前面的 ref 对象没有机会被 React 赋值，因为它们已经被新的 ref 替代了。3）最后一个 ref 是当前渲染中创建的，因此它会被 React 正确地赋值为对应的 <input> 元素。
 arr[1] === arr[3] // false
 *  */