import React, {Component} from "react";

class CompRefsByCreateRefOfReact extends Component {
  constructor(props) {
    super(props);
    this.inputEl = React.createRef(); // 作用与类组件也类似
    // 等价于：
    /*this.inputEl = {
      current: null, // 为什么不直接赋值 dom 给 this.inputEl，而要加一个属性，因为保持引用，效率问题，后面学了源码便知
    };*/
    console.log(this.inputEl); // {current: null}
  }

  handleClick = () => {
    console.log(this); //  { refs: {current: input}, ...}
    this.inputEl.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.inputEl} type="text"/>
        <button onClick={this.handleClick}>聚焦</button>
      </div>
    );
  }
}

export default CompRefsByCreateRefOfReact;