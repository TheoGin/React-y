import React, { useState } from "react";
import { Transition } from 'react-transition-group';
import './animate.css'

const duration = 300;

function App() {

  const [isIn, setIsIn] = useState(true);

  return (
    <div>
      {/* appear 首次加载是否需要过渡 */}
      <Transition
        appear
        in={isIn}
        timeout={duration}
        addEndListener={(dom, doneCb)=> {
          console.log(dom, doneCb);
          dom.addEventListener('transitionend', () => {
            dom.style.color = 'red';
            console.log('transitionend');
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
        setIsIn(!isIn)
      }}>切换状态</button>
    </div>
  );
}

export default App;