import React, { useEffect, useState } from "react";

const divRefObject = React.createRef();
window.timer = null; // 计时器ID

function clearTimer() {
  clearInterval(window.timer); // 清空之前的计时器
  window.timer = null;
}

/**
 * 一个可移动的块，该组件每次渲染完成后，始终从0，0坐标在10秒钟内，移动到目标点坐标
 * @param {*} props
 * props.left，要移动到的目标点横坐标
 * props.top，要移动到的目标点纵坐标
 */
function MovableBlock(props) {

  // 写在外面，避免每次 createRef
  // const divRefObject = React.createRef();

  useEffect(() => {
    console.log("副作用函数");
    // clearTimer(); // 防止频繁输入 div 闪动（有了清理函数返回值可以不写）

    const div = divRefObject.current;
    const totalDuration = 10000;
    const tick = 10;

    const totalTimes = totalDuration / tick;
    let currentTimes = 0; // 当前移动的次数

    const leftDistance = props.left / totalTimes;  // 横坐标上每次移动的距离
    const topDistance = props.top / totalTimes;  // 纵坐标上每次移动的距离

    window.timer = setInterval(() => {
      currentTimes++; // 移动次数+1

      const newLeft = currentTimes * leftDistance;
      const newTop = currentTimes * topDistance;
      div.style.left = newLeft + "px";
      div.style.top = newTop + "px";

      if (currentTimes === totalTimes) {
        clearTimer();
      }
    }, tick);

    // 3. useEffect中的副作用函数，可以有返回值，返回值必须是一个函数，该函数叫做清理函数
    //   3.1. 该函数运行时间点，在每次运行副作用函数之前
    //   3.2. 首次渲染组件不会运行
    //   3.3. 组件被销毁时一定会运行
    return () => {
       console.log('清理函数');
       clearTimer();
     };
    // return clearTimer; // 直接使用 clearTimer 作为清理函数
  });

  console.log("渲染组件");
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
清理函数        (3.1. 该函数运行时间点，在每次运行副作用函数之前)
副作用函数

 （再输入一次）
 渲染组件
 清理函数
 副作用函数

（点击 显示/隐藏）
 清理函数        (3.3. 组件被销毁时一定会运行)
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
          <MovableBlock left={ point.x } top={ point.y } />
          <div style={ {
            paddingTop: 200,
          } }>
            x: <input type="number" value={ point.x } onChange={ (e) => {
            setPoint({
              ...point,
              x: point.x = e.target.value,
            });
          } } />
            y: <input type="number" value={ point.y } onChange={ (e) => {
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