import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import "animate.css/animate.css";

function CompA(props) {
  return (
    <CSSTransition
      appear
      in={ props.in }
      timeout={ 500 }
      // classNames='test' // 类名前缀
      classNames={ {
        appearDone: "appear-done",
        appearActive: "animate__fadeInRight animate__faster appear-active",
        enterActive: "animate__fadeInRight animate__faster",
        exitActive: "animate__fadeOutLeft animate__faster",
        exitDone: "exit-done",
      } }
    >
      <h1 className="animate__animated">CompA</h1>
    </CSSTransition>
  );
}

function CompB(props) {
  if (!props.in) {
    return null;
  }
  return (
    <CSSTransition
      appear
      in={ props.in }
      timeout={ 500 }
      // classNames='test' // 类名前缀
      classNames={ {
        appearDone: "appear-done",
        appearActive: "animate__fadeInRight animate__faster appear-active",
        enterActive: "animate__fadeInRight animate__faster",
        exitActive: "animate__fadeOutLeft animate__faster",
        exitDone: "exit-done",
      } }
    >
      <h1 className="animate__animated titleB">CompB</h1>
    </CSSTransition>
  );
}

function App() {

  const [showA, setShowA] = useState(true);

  return (
    <div>
        <CompA in={showA} />
        <CompB in={!showA} />
      <button onClick={ () => setShowA(!showA) }>切换显示{ showA ? "CompB" : "CompA" }</button>
    </div>
  );
}

export default App;