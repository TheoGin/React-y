import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./App.css";
import 'animate.css/animate.css'

function App() {

  const [show1, setShow1] = useState(true);

  return (
    <div className="container">
      {/* <SwitchTransition mode='in-out'> */}
      <SwitchTransition mode='out-in'>
        <CSSTransition
          key={ show1 ? "title1" : "title2" }
          in={ show1 }
          timeout={ 500 }
          appear
          classNames={ {
            appearActive: "animate__bounceIn",
            enterActive: "animate__bounceIn",
            exitActive: "animate__bounceOut",
          } }
          /* classNames={ {
           appearActive: "animate__fadeInRight",
           enterActive: "animate__fadeInRight",
           exitActive: "animate__fadeOutLeft",
           } } */
        >
          {/* 如果不加key，会用同一个 h1 */ }
          <h1 className="animate__animated">{ show1 ? "title1" : "title2" }</h1>
        </CSSTransition>
      </SwitchTransition>
      <button onClick={ () => setShow1(!show1) }>切换显示</button>
    </div>
  );
}

export default App;