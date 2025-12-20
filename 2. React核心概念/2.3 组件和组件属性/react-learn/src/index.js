import React from "react";
import RenderDOM from "react-dom";
import MyFuncComp from "./MyFuncComp";
import {MyClassComp} from "./MyClassComp";


// 可以提出去
// function myFuncComp() { // Warning: <myFuncComp /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.
// 特别注意：组件的名称首字母必须大写。React 是靠大小写来区分是 内置组件(div、h1、...) 或 自定义组件
/*function MyFuncComp() {
  return <h1>函数组件的内容</h1>
}*/

// 内置组件和函数组件本质都是 React.createElement(...)，区别在于 type 不一样
const h1 = <h1>1</h1>; // {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
console.log(h1);

const myFuncComp = <MyFuncComp />;
console.log(myFuncComp); // {$$typeof: Symbol(react.element), key: null, ref: null, props: {…}, type: ƒ MyFuncComp(props) ... }

function MyFuncComp2() {
    return <h1>2</h1>
}
console.log(<MyFuncComp2/>); // {$$typeof: Symbol(react.element), key: null, ref: null, props: {…}, type: ƒ MyFuncComp2() ... }

const myClassComp = <MyClassComp/>;
console.log(myClassComp); // {$$typeof: Symbol(react.element), key: null, ref: null, props: {…}, type: class MyClassComp, …}

RenderDOM.render(
  <div>
    {/* ------- 函数组件 ---------- */}
    {/* 函数组件：可以当做函数调用，但是不推荐这样用，并且这样子会导致调试工具看不到组件结构 */}
    {/*{ MyFuncComp() }*/}

    { myFuncComp }

    {/* 传递字符串 */}
    <MyFuncComp number="2" /> {/* 会转换成 { number: "2" } 传递给子组件 */}

    {/* 传递数字 */}
    <MyFuncComp number={3} />
    <MyFuncComp number={5} />

    {/* ------- 类组件 ---------- */}
    <MyClassComp number="2" />

    {/* 两种方式传递 布尔属性 等价 */}
    <MyClassComp enable={true} /> {/* {enable: true}  */}
    <MyClassComp enable /> {/* {enable: true}  */}

    {/* 传递 对象 */}
    <MyClassComp obj={ { name: 'Soph', age: 18}} />

    {/* 传递 React元素（虚拟DOM） */}
    <MyClassComp ui={<h2>这是我通过属性传递的元素</h2>} />
  </div>,
  document.getElementById("root")
);
