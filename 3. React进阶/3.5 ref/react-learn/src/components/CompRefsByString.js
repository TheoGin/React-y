import React, {Component} from "react";

class A extends Component {
  method() {
    console.log('组件A的method方法被调用了');
  }

  render() {
    return <h1>A组件</h1>
  }
}

function F() {
  return <span>f</span>
}

class CompRefsByString extends Component {
  handleClick = () => {
    // 1、在JS中聚焦，在 React中不推荐用
    /*const htmlInputElement = document.querySelector("input");
    htmlInputElement.focus();*/

    // 2、使用 ref
    // 2.1、使用 ref内置的html组件（deprecated）
    console.log(this); // { refs: {inputEl: input}, ...}
    this.refs.inputEl.focus();

    // 2.2、使用 ref作用于类组件（deprecated）
    console.log(this); // { refs: {inputEl: input, AComp: A}, ...}
    this.refs.AComp.method(); // 组件A的method方法被调用了
  };

  render() {
    return (
      <div>
        {/* 场景：希望直接使用dom元素中的某个方法，或者希望直接使用自定义组件中的某个方法 */}
        {/* 1. ref作用于内置的html组件，得到的将是真实的dom对象 */}
        <input ref='inputEl' type="text"/>
        <button onClick={this.handleClick}>聚焦</button>

        {/* 2. ref作用于类组件，得到的将是类的实例 */}
        <A ref='AComp' />

        {/* 3. ref不能作用于函数组件 Warning: Function components cannot be given refs. Attempts to access this ref will fail. */}
        {/* <F ref='FComp' /> */}
      </div>
    );
  }
}

export default CompRefsByString;