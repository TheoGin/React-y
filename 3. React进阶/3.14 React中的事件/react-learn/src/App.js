import React from "react";

function CompA() {
  return <div style={ {
    width: "90%",
    height: 500,
    border: "2px solid",
  } } onClick={ () => {
    console.log("点击了 CompA 组件");
  } }>
    <h1>CompA</h1>
    <Comp1 />
  </div>;
}

function Comp1() {
  return <div onClick={ (e) => {
    // 5. 在事件处理程序中，不要异步的使用事件对象，如果一定要使用，需要调用persist函数
    setTimeout(() => {
      // TODO: 没有报警告？
      console.log('setTimeout', e);
    }, 1000)
    console.log("点击了 Comp1 组件");
  } } style={ {
    width: "70%",
    height: 500,
    border: "2px solid",
  } }>
    <h1>Comp1</h1>
    <Comp2 />
  </div>;
}

/* React内置的DOM组件中的事件
 // 1. 给document注册事件
 // 2. 几乎所有的元素的事件处理，均在document的事件中处理
 //   2.1. 一些不冒泡的事件，是直接在元素上监听
 //   2.2. 一些document上面没有的事件，直接在元素上监听
 // 3. 在document的事件处理，React会根据虚拟DOM树的完成事件函数的调用
 //   4.2. nativeEvent，可以得到真实的DOM事件对象
 //   4.3. 为了提高执行效率，React使用事件对象池来处理事件对象
 *  */
function Comp2() {
  return <div style={ {
    width: "50%",
    height: "70%",
    border: "2px solid",
  } }>
    <h1 onClick={ (e) => {
      // 4. React的事件参数，并非真实的DOM事件参数，是React合成的一个对象，该对象类似于真实DOM的事件参数
      //   4.1. stopPropagation，阻止事件在虚拟DOM树中冒泡

      console.log("点击了 Comp2 组件", e);

      console.log('before stopPropagation: ', e.isPropagationStopped()); // before stopPropagation: false

      // 通过React的事件中阻止事件冒泡，无法阻止真实的DOM事件冒泡
      // e.stopPropagation();

      console.log('after stopPropagation: ', e.isPropagationStopped()); // after stopPropagation: true

      // 可以通过nativeEvent.stopImmediatePropagation()，阻止document上剩余事件的执行
      /* console.log(e.nativeEvent); // 通过 e.nativeEvent 获取真实DOM事件对象
      e.nativeEvent.stopImmediatePropagation(); */
    } }>Comp2</h1>
  </div>;
}

function Comp3() {
  return <div style={ {
    width: "90%",
    height: 500,
    border: "2px solid",
  } }>
    <h1>Comp3</h1>
  </div>;
}

export default function App() {
  return <div>
    <CompA />
    <Comp3 />
  </div>;
}

// 1. 如果给真实的DOM注册事件，阻止了事件冒泡，则会导致react的相应事件无法触发
// 2. 如果给真实的DOM注册事件，事件会先于React事件运行3.
document.addEventListener("click", (e) => {
  e.stopPropagation(); // 已经是最外层元素，阻止没有意义
  console.log("document注册的click");
});
