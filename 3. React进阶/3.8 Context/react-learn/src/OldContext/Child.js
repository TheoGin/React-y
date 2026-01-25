import React, {Component} from "react";
import {types} from "./types";

// import PropTypes from "prop-types";
class ChildA extends Component {
  // 要求：如果要使用上下文中的数据，组件必须有一个静态属性 contextTypes，该属性描述了需要获取的上下文中的数据类型
  // Warning: contextTypes was defined as an instance property on Child. Use a static property to define contextTypes instead.
  static contextTypes = {
    // Warning: Failed context type: Invalid context `num` of type `number` supplied to `Child`, expected `string`.
    // num: PropTypes.string,
    num: types.num,
  };
  // 获取全部数据
  // static contextTypes = types;

  // 1. 可以在组件的构造函数中，通过第二个参数，获取上下文数据
  // 2. 从组件的context属性中获取
  // 3. 在函数组件中，通过第二个参数，获取上下文数据
  constructor(props, context) {
    console.log(context); // {num: 123} 只会传递 contextTypes 声明的属性
    super(props, context); // 之后要通过 this.context 获取，则也需要传递给 super
    console.log(this.context); // {num: 123}
  }

  render() {
    return (
      <div>
        <h1>ChildA子组件获取上下文数据：</h1>
        <p>num: {this.context.num}</p>
      </div>
    );
  }
}


export default function Child() {
  return <ChildA/>;
};