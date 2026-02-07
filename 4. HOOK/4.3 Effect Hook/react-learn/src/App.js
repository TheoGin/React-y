import React, { useEffect, useState } from "react";

window.timer = null;

function clearTimer() {
  clearInterval(window.timer);
  window.timer = null;
}

function Movable(props) {

  const divRefObject = React.createRef();

  useEffect(() => {
    console.log('副作用函数');
    // clearTimer(); // 防止频繁输入 div 闪动（有了清理函数返回值可以不写）

    const div = divRefObject.current;
    const totalDuration = 10000;
    const tick = 10;

    const totalTimes = totalDuration / tick;
    let currentTimes = 0;

    const leftDistance = props.left / totalTimes;
    const topDistance = props.top / totalTimes;

    window.timer = setInterval(() => {
      currentTimes++;

      const newLeft = currentTimes * leftDistance;
      const newTop = currentTimes * topDistance;
      div.style.left = newLeft + "px";
      div.style.top = newTop + "px";

      if (currentTimes === totalTimes) {
        clearTimer();
      }
    }, tick);

    // 3. useEffect中的副作用函数，可以有返回值，返回值必须是一个函数，该函数叫做清理函数
    //   1. 该函数运行时间点，在每次运行副作用函数之前
    //   2. 首次渲染组件不会运行
    //   3. 组件被销毁时一定会运行
    return () => {
      console.log('清理函数');
      clearTimer();
    };
  });

  console.log('渲染组件');
  return (
    <div ref={ divRefObject } style={ {
      position: "fixed",
      left: 0,
      top: 0,
      width: 100,
      height: 100,
      background: "#f40",
    } }></div>
  );
}
/*
（一开始）
渲染组件
副作用函数

（输入一次）
渲染组件
清理函数
副作用函数

（再输入一次）
渲染组件
清理函数
副作用函数
……
*  */

export default function App() {
  const [point, setPoint] = useState({
    x: 0,
    y: 0,
  });

  const [visible, setVisible] = useState(true);

  return (
    <div>
      { visible && (
        <div>
          <Movable left={ point.x } top={ point.y } />
          <div style={ {
            paddingTop: 200,
          } }>
            x: <input type="text" value={ point.x } onChange={ (e) => {
            setPoint({
              ...point,
              x: point.x = e.target.value,
            });
          } } />
            y: <input type="text" value={ point.y } onChange={ (e) => {
            setPoint({
              ...point,
              y: point.y = e.target.value,
            });
          } } />
          </div>
        </div>
      ) }
      <button onClick={ () => {
        setVisible(!visible);
      } }>显示/隐藏
      </button>
    </div>
  )
    ;
}