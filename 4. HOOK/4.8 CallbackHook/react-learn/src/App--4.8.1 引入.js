import React, { useState } from "react";

class Test extends React.PureComponent {
  render() {
    console.log("Test render");
    return (
      <div>
        <h1>{ this.props.text }</h1>
        <button onClick={ this.props.onClick }>改变文本</button>
      </div>
    );
  }
}

function Parent() {
  console.log("Parent render");

  const [text, setText] = useState(123);
  const [num, setNum] = useState(0);

  return (
    <div>
      { /* 函数的地址每次渲染都发生了变化，导致了子组件跟着重新渲染，若子组件是经过优化的组件，则可能导致优化失效 */ }
      <Test
        text={ text }
        onClick={ () => {
        setText(Math.random);
      } } />
      <input type="number" value={ num } onChange={ e => {
        // setNum(e.target.value);
        setNum(parseInt(e.target.value));
      } } />
    </div>
  );
}

function App() {

  return (
    <Parent />
  );
}

export default App;

/*
点击改变文本的时候【正常】：
Parent render
Test render

Parent render
Test render
……

num改变的时候：
Parent render
Test render【不正常】

Parent render
Test render【不正常】
……
*  */