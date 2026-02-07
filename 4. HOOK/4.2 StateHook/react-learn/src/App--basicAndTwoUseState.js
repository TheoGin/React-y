import React, { useState } from "react";

// State Hook：是一个在函数组件中使用的函数（useState），用于在函数组件中使用状态
// Error: Invalid hook call. Hooks can only be called inside of the body of a function component.
// useState(0);

export default function App() {
  // function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  // 1. useState 函数有一个参数，这个参数的值表示状态的默认值
  /* const arrState = useState(0); // 使用一个状态，该状态的默认值是0
   const num = arrState[0]; // 得到状态的值
   const setNum = arrState[1];  // 得到一个函数，该函数用于改变状态
   */

  // 2. 函数的返回值是一个数组，该数组一定包含两项
  //   1. 第一项：当前状态的值
  //   2. 第二项：改变状态的函数
  const [num, setNum] = useState(0);  // 使用一个状态，该状态的默认值是0

  // 一个函数组件中可以有多个状态，这种做法非常有利于横向切分关注点。
  const [visible, setVisible] = useState(true);

  useState();
  return (
    <div>
      <p style={ {
        display: visible ? "block" : "none",
      } }>
        <button onClick={ () => {
          setNum(num - 1);
        } }>-
        </button>
        <span>{ num }</span>
        <button onClick={ () => {
          setNum(num + 1);
        } }>+
        </button>
      </p>
      <button onClick={ () => {
        setVisible(!visible);
      } }>
        显示/隐藏
      </button>
    </div>
  );
}

// 对比类组件，useState 写法会更简洁
/* import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      visible: true,
    };
  }

  render() {
    return (
      <div>
        <p style={ {
          display: this.state.visible ? "block" : "none",
        } }>
          <button onClick={ () => {
            this.setState({
              num: this.state.num - 1,
            });
          } }>-
          </button>
          <span>{ this.state.num }</span>
          <button onClick={ () => {
            this.setState({
              num: this.state.num + 1,
            });
          } }>+
          </button>
        </p>
        <button onClick={ () => {
          this.setState({
            visible: !this.state.visible,
          });
        } }>
          显示/隐藏
        </button>
      </div>
    );
  }
}

export default App; */
