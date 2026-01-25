import React, {Component} from "react";
import PropTypes from "prop-types";

export const types = {
  num: PropTypes.number.isRequired,
  str: PropTypes.string,
  setNum: PropTypes.func,
};

class ChildB extends Component {
  // 要求：如果要使用上下文中的数据，组件必须有一个静态属性 contextTypes，该属性描述了需要获取的上下文中的数据类型
  // Warning: contextTypes was defined as an instance property on Child. Use a static property to define contextTypes instead.
  /**
   * 声明需要使用哪些上下文中的数据
   */
  static contextTypes = {
    ...types,
    str2: types.str,
  }; // 获取全部数据
  /*static contextTypes = {
    // Warning: Failed context type: Invalid context `num` of type `number` supplied to `Child`, expected `string`.
    // num: PropTypes.string,
    num: types.num,
    setNum: types.setNum,
  };*/

  // 1. 可以在组件的构造函数中，通过第二个参数，获取上下文数据
  // 2. 从组件的context属性中获取
  constructor(props, context) {
    console.log(context); // {num: 123} 只会传递 contextTypes 声明的属性
    super(props, context); // 之后要通过 this.context 获取，则也需要传递给 super
    console.log(this.context); // {num: 123}
  }

  render() {
    return (
      <div>
        <h1>ChildB子组件获取上下文数据：</h1>
        <p>
          num: {this.context.num}
          <button onClick={() => {
            // 从最近上下文 ChildA 拿到的 this.state.num，由于ChildA中没有 setNum，所以会加到 Parent的 state 中，789 + 2 = 791，一直拿到的是 789，所以每次加出来的都是 791
            this.context.setNum(this.context.num + 2)
          }}>num+2</button>
        </p>
        <p>str: {this.context.str}</p>
        <p>str2: {this.context.str2}</p>
      </div>
    );
  }
}

class ChildA extends Component {

  static contextTypes = types;

  static childContextTypes = {
    num: types.num,
    str2: types.str,
  };

  getChildContext() {
    return {
      num: 789,
      str2: "aaa",
    }
  }

  render() {
    return (
      <div>
        <h1>ChildA子组件获取上下文数据：</h1>
        <p>
          {/* 从 this.context.num 中获取的数据，不会从当前上下文拿 */}
          num: {this.context.num}
        </p>
        <p>str: {this.context.str}</p>
        <ChildB/>
      </div>
    );
  }
}

// 只有类组件才可以创建上下文
class Parent extends Component {

  state = {
    num: 123,
    str: "abc",
  }

  // 1. 给类组件书写静态属性 childContextTypes，使用该属性对上下文中的数据类型进行约束
  static childContextTypes = types;

  // 2. 添加实例方法 getChildContext，该方法返回的对象，即为上下文中的数据，该数据必须满足类型约束，该方法会在每次render之后运行。
  getChildContext() {
    console.log("getChildContext被调用"); // getChildContext被调用
    return {
      num: this.state.num,
      str: this.state.str,
      setNum: (newNum) => {
        this.setState({
          num: newNum,
        })
      }
    };
  }

  render() {
    const { num, str } = this.getChildContext();
    return (
      <div>
        <h1>父组件的上下文数据：</h1>
        <p>
          {/* 上下文就近找，类似于作用域链 */}
          num: {num}
          <button onClick={() => {
            this.setState({
              num: this.state.num + 1,
            })
          }}>num+1</button>
        </p>
        <p>str: {str}</p>
        <ChildA/>
      </div>
    );
  }
}

export default Parent;