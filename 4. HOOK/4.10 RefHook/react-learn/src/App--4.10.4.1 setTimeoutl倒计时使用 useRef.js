import React, { useEffect, useRef, useState } from "react";


function App() {

  const [num, setNum] = useState(3);

  const timer = useRef();

  useEffect(() => {
    if (num === 0) {
      return;
    }
    timer.current = setTimeout(() => {
      console.log(num);
      setNum(num - 1);
    }, 1000);

    return () => {
      clearTimeout(timer.current);
    };
  }, [num]);

  return (
    <div>
      <h1>倒计时：{ num }</h1>
    </div>
  );
}

export default App;