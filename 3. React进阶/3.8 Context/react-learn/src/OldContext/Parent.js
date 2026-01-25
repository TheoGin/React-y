import React, {Component} from "react";
import Child from "./Child";
import {types} from "./types";

// 只有类组件才可以创建上下文
class Parent extends Component {

  // 1. 给类组件书写静态属性 childContextTypes，使用该属性对上下文中的数据类型进行约束
  static childContextTypes = types;

  // 2. 添加实例方法 getChildContext，该方法返回的对象，即为上下文中的数据，该数据必须满足类型约束，该方法会在每次render之后运行。
  getChildContext() {
    console.log("getChildContext被调用"); // getChildContext被调用
    return {
      num: 123,
      str: "abc",
    };
  }

  render() {
    const { num, str } = this.getChildContext();
    return (
      <div>
        <h1>父组件的上下文数据：</h1>
        <p>num: {num}</p>
        <p>str: {str}</p>
        <Child/>
      </div>
    );
  }
}

export default Parent;