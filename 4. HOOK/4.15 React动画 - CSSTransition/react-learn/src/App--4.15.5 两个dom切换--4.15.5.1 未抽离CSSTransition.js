import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./App.css";


function CompA(props) {
  return (
    <CSSTransition
      appear
      mountOnEnter
      in={ props.in }
      timeout={ 500 }
    >
      <h1>CompA</h1>
    </CSSTransition>
  );
}

function CompB(props) {
  return (
    <CSSTransition
      appear
      mountOnEnter
      in={ props.in }
      timeout={ 500 }
    >
      <h1 className="titleB">CompB</h1>
    </CSSTransition>
  );
}

function App() {

  const [showA, setShowA] = useState(true);

  return (
    <div className="container">
      <div className="comp-container">
        <CompA in={ showA } />
        <CompB in={ !showA } />
      </div>
      <button onClick={ () => setShowA(!showA) }>切换显示{ showA ? "CompB" : "CompA" }</button>
    </div>
  );
}

export default App;