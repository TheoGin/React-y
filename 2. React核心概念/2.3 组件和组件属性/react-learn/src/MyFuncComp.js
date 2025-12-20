// 有 JSX 就需要导入
import React from "react";

// export default function () { // 匿名函数，控制台会显示 Anonymous
export default function MyFuncComp(props) { // MyFuncComp为组件名
  // props：没有传就是空对象
  // console.log(props); // {number: 3}
  if (props.number) {
    return <h1>函数组件的内容，数字：{ props.number }</h1>
  }
  return <h1>函数组件的内容</h1>
}