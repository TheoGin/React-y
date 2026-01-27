import React, { Component } from "react";

function getDatas() {
  return;
}

class Comp2 extends Component {
  render() {
    // 默认情况下，若一个组件在渲染期间（render）发生错误，会导致整个组件树全部被卸载
    // 错误边界：是一个组件，该组件会捕获到渲染期间（render）子组件发生的错误，并有能力阻止错误继续传播
    // 让某个组件捕获错误
    /* const datas = getDatas();
    datas.map(item => item); */

    /* setTimeout(() => {
      const datas = getDatas();
      datas.map(item => item);
    }, 1000); */

    return (
      <div>
        {/* 3. 事件中的错误，错误边界组件无法捕获 */}
        <h1 onClick={() => {
          throw new Error('Comp2 error');
        }}>Comp2</h1>
      </div>
    );
  }
}

export default Comp2;