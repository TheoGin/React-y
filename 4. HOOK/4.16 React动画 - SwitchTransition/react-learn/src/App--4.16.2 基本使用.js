import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./App.css";

/*
*
*  */
function App() {

  const [show1, setShow1] = useState(true);

  return (
    /*
     * 4.16.1 默认情况下：out-in
       1. 当key值改变时，会将之前的DOM根元素添加退出样式（exit,exit-active)
       2. 退出完成后，将该DOM元素移除
       3. 重新渲染内部DOM元素
       4. 为新渲染的DOM根元素添加进入样式(enter, enter-active, enter-done)
     * 4.16.2 in-out:
       1. 重新渲染内部DOM元素，保留之前的元素
       2. 为新渲染的DOM根元素添加进入样式(enter, enter-active, enter-done)
       3. 将之前的DOM根元素添加退出样式（exit,exit-active)
       4. 退出完成后，将该DOM元素移除
     *  */
    <div className="container">
      {/* <SwitchTransition mode='in-out'> */}
      <SwitchTransition mode='out-in'>
        <CSSTransition
          // key={ show1 ? "title1" : "title2" }
          key={ show1 }
          in={ show1 }
          timeout={ 500 }
          appear
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