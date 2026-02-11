import React, { useEffect, useRef, useState } from "react";


function App() {

  const [num, setNum] = useState(3);

  const numRef = useRef(num); // { current: 3 }

  useEffect(() => {
    const timer = setInterval(() => {
      numRef.current--;
      setNum(numRef.current);
      console.log(numRef.current);

      if (numRef.current === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []); // 不依赖 num，所以只会一开始运行一次

  return (
    <div>
      <h1>倒计时：{ num }</h1>
    </div>
  );
}

export default App;