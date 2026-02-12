import React, { useState } from "react";
import { Transition } from 'react-transition-group';
import './animate.css'

const duration = 300;

function App() {

  const [inProp, setInProp] = useState(true);

  return (
    <div>
      {/* appear 首次加载是否需要过渡 */}
      <Transition
        appear
        in={inProp}
        timeout={duration}
        addEndListener={(dom, doneCb)=> {
          // console.log(dom, doneCb);
          dom.addEventListener('transitionend', () => {
            dom.style.color = 'red';
            console.log('transitionend');
          }, {
            once: true, // 只触发一次
          })
        }}
      >
        {state => {
          console.log(state);
          return (
            <div className={state}>
              I'm a fade Transition!
            </div>
          )
        }}
      </Transition>
      <button onClick={() => {
        setInProp(!inProp)
      }}>
        Click to Toggle
      </button>
    </div>
  );
}

export default App;

/*
exited
entering
entered
transitionend

entered
exiting
exited
 App.js:22 transitionend
*  */