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

    return clearTimer;

    // 4. useEffect函数，可以传递第二个参数
    //   1. 第二个参数是一个数组
    //   2. 数组中记录该副作用的依赖数据
    //   3. 当组件重新渲染后，只有依赖数据与上一次不一样的时（对应于类组件shouldComponentupdate优化），才会执行副作用
    //   4. 所以，当传递了依赖数据之后，如果数据没有发生变化
    //     1. 副作用函数仅在第一次渲染后运行（对应类组件的componentDidMount挂载）
    //     2. 清理函数仅在卸载组件后运行（对应类组件的componentWillUnMount卸载前）
  }, [props.left, props.top]);

  // console.log("渲染组件");

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

const inputXRef = React.createRef();
const inputYRef = React.createRef();

export default function App() {
  const [point, setPoint] = useState({
    x: 0,
    y: 0,
  });

  const [visible, ] = useState(true);

  return (
    <div>
      { visible && (
        <div>
          <MovableBlock left={ point.x } top={ point.y } />
          <div style={ {
            paddingTop: 200,
          } }>
            x: <input ref={inputXRef} type="number" />
            y: <input ref={inputYRef} type="number" />
            <button onClick={ () => {
              setPoint({
                x: inputXRef.current.value,
                y: inputYRef.current.value,
              })
            } }>确定</button>
          </div>
        </div>
      ) }
    </div>
  )
    ;
}