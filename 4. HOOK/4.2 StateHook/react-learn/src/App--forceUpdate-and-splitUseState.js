import React, { useState } from "react";

export default function App() {
  console.log("App render");
  const [point, setPoint] = useState({
    x: 1,
    y: 2,
  });

  // 7. 如果某些状态之间没有必然的联系，应该分化为不同的状态，而不要合并成一个对象
  const [x, setX] = useState(1);
  const [y, setY] = useState(2);

  // 6. 如果要实现强制刷新组件
  const [, forceUpdate] = useState({});
  return (
    <div>
      <p>x: { point.x }, y: { point.y }</p>
      <button onClick={ () => {
        // 5. 使用函数改变数据，传入的值不会和原来的数据进行合并，而是直接替换。
        /* setPoint({
         x: point.x + 1,
         }); // 会导致 y 没了，只剩下 x 属性（x: 8, y: ）
         */
        setPoint({
          ...point,
          x: point.x + 1,
        }); // x: 8, y: 2
      } }>
        point.x + 1
      </button>

      <p>单纯x: { x }, 单纯y: { y }</p>
      <button onClick={ () => {
        setX(x + 1);
      } }>
        单纯x + 1
      </button>

      <button onClick={ () => {
        // 6.1. 函数组件：使用一个空对象的useState
        forceUpdate({});
      } }>
        函数组件 强制刷新
      </button>
    </div>
  );
}

/*
import React, { Component } from "react";

class App extends Component {
  render() {
    console.log('App render');
    return (
      <div>
        <button onClick={ () => {
          // 6.2. 类组件：使用forceUpdate函数
          this.forceUpdate();
        } }>
          类组件 强制刷新
        </button>
      </div>
    );
  }
}

export default App;*/
