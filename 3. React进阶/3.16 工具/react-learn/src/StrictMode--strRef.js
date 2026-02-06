import React, { Component } from "react";

// 3. 关于使用废弃的 findDOMNode 方法的警告
class App extends Component {
  // 1. 识别不安全的生命周期（如：ComponentWillMount）
  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log(this.refs.pDom);
  }

  render() {
    return (
      <div>
        {/* // 2. 关于使用过时字符串 ref API 的警告（bug： dom可能会更新，而字符串只有在第一次才会初始化，后面就不会更新了）
        Warning: A string ref, "pDom", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref */}
        <p ref="pDom">p元素</p>
      </div>
    );
  }
}

export default App;