import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import './App.css';
import 'animate.css/animate.css'

function CompA() {
  return <h1 className='animate__animated'>CompA</h1>;
}

function CompB() {
  return <h1 className='animate__animated titleB'>CompB</h1>;
}

/*
* 4.15.1 当进入时，发生：
 1. 为CSSTransition内部的DOM根元素（后续统一称之为DOM元素）添加样式enter
 2. 在一下帧(enter样式已经完全应用到了元素)，立即为该元素添加样式enter-active
 3. 当timeout结束后，去掉之前的样式，添加样式enter-done
*
*  */
function MyCSSTransition(props) {

  return (
    <CSSTransition
      appear
      in={ props.in }
      timeout={ 500 }
      // classNames='test' // 类名前缀
      classNames={{
        appearDone: 'appear-done',
        appearActive: 'animate__fadeInRight animate__faster appear-active',
        enterActive: 'animate__fadeInRight animate__faster',
        exitActive: 'animate__fadeOutLeft animate__faster',
        exitDone: 'exit-done',
      }}
    >
      { props.children }
    </CSSTransition>
  );
}

function App() {

  const [showA, setShowA] = useState(true);

  return (
    <div>
      <MyCSSTransition in={ showA }>
        <CompA />
      </MyCSSTransition>
      <MyCSSTransition in={ !showA }>
        <CompB />
      </MyCSSTransition>
      <button onClick={ () => setShowA(!showA) }>切换显示{ showA ? "CompB" : "CompA" }</button>
    </div>
  );
}

export default App;