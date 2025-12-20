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

const myFuncComp = <MyFuncComp />;

RenderDOM.render(
  <div>
    {/* ------- 函数组件 ----------*/}
    {/* 函数组件：可以当做函数调用，但是不推荐这样用，并且这样子会导致调试工具看不到组件结构 */}
    {/*{ MyFuncComp() }*/}

    {myFuncComp}
    <MyFuncComp />
    <MyFuncComp />
    <MyFuncComp />

    {/* ------- 类组件 ----------*/}
    <MyClassComp/>
    <MyClassComp/>
    <MyClassComp/>
    <MyClassComp/>
  </div>,
  document.getElementById("root")
);
