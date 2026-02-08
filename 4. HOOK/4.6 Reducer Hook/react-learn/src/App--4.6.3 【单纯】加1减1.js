import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <button onClick={ () => {
        setNum(num - 1);
      } }>-
      </button>
      <span>{ num }</span>
      <button onClick={ () => {
        setNum(num + 1);
      } }>+
      </button>
    </div>
  );
}

export default App;