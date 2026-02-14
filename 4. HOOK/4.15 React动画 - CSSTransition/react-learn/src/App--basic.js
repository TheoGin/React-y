import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./App.css";

function App() {

  const [inProp, setInProp] = useState(true);

  return (
    // timeout 切换状态时间
    <div className="container">
      <CSSTransition
        in={ inProp }
        timeout={ 500 }
        appear
      >
        <h1>一个标题</h1>
      </CSSTransition>
      <button onClick={ () => setInProp(!inProp) }>切换显示</button>
    </div>
  );
}

export default App;