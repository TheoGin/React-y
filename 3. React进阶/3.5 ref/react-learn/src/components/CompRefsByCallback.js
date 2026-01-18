import React, {Component} from "react";

class CompRefsByCallback extends Component {
  state = {
    show: true,
  };

  constructor(props) {
    super(props);
    console.log("constructor this.inputEl: ", this.inputEl); // constructor this.inputEl:  undefined
  }

  componentDidMount() {
    // 1. componentDidMount的时候会调用该函数。在componentDidMount事件中可以使用ref
    console.log("componentDidMount this.inputEl: ", this.inputEl); // componentDidMount this.inputEl: <input type="text">
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    })
    // this.setState(); // 触发重新渲染
  };

  // 3. 如果ref所在的组件被卸载，会调用函数，此时打印：getRef el: null
  getRef = (el) => {
    // 只会运行一次，this.setState(); 也不会再运行
    console.log("getRef el: ", el); // getRef el: <input type="text">
    this.inputEl = el;
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>显示/隐藏</button>
        <input ref={(el) => {
          console.log("el", el);
          // 2.1 【回调写在内部】如果ref的值发生了变动（旧的函数被新的函数替代），分别调用旧的函数以及新的函数，时间点出现在componentDidUpdate之前
          //   2.1.1. 旧的函数被调用时，传递null // el null
          //   2.1.2. 新的函数被调用时，传递对象 // el <input type="text">
          this.inputEl = el;
        }} type="text"/>

        {/* 2.2【回调写在内部提到外部】只会运行一次 */}
        {this.state.show && <input ref={this.getRef} type="text"/>}
      </div>
    );
  }
}

export default CompRefsByCallback;