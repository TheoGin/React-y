import React, { useLayoutEffect, useRef, useState } from "react";

/* var div = document.querySelector("#root");
 div.innerHTML = "abc";
 div.innerHTML = "123";
 div.style.color = "red";
 // 上面三句会一起运行，而不是分三次 */


function App() {
  const [num, setNum] = useState(1);
  const h1Ref = useRef();

  /* // useEffect 用户看到新的效果，会导致闪动
  useEffect(() => {
    // setNum(Math.random()); // 会导致栈溢出

    h1Ref.current.innerText = Math.random().toFixed(2);
  }); */

  // useEffect 用户看到新的效果之前，不会导致闪动
  useLayoutEffect(() => {
    // setNum(Math.random()); // 会导致栈溢出

    h1Ref.current.innerText = Math.random().toFixed(2);
  })

  return (
    <div>
      <h1 ref={ h1Ref }>{ num }</h1>
      <button onClick={ () => {
        setNum(num + 1);
      } }>+
      </button>
    </div>
  );
}

export default App;