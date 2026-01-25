import React, {Component} from "react";

const ctx = React.createContext();

class ChildB extends Component {
  static contextType = ctx;

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('运行了优化'); // 始终不会运行
    return false;
  }

  render() {
    return (
      <div>
        <h1>ChildB后代子组件获取上下文数据：</h1>
        <p>
          num: {this.context.num}
          <button onClick={() => {
            this.context.setNum(this.context.num + 2);
          }}>num+2
          </button>
        </p>
        <p>str: {this.context.str}</p>
      </div>
    );
  }
}

class Parent extends Component {

  state = {
    num: 123,
    str: "abc",
    setNum: (newNum) => {
      this.setState({
        num: newNum,
      });
    },
  };

  // 写在需要获取数据的地方，而不是这里
  static contextType = ctx;

  render() {
    console.log("childB render");
    return (
      <div>
        <h1>父组件的上下文数据：</h1>
        <p>
          num: {this.state.num}
          <button onClick={() => {
            this.setState({});
          }}>触发setState
          </button>
        </p>
        <p>str: {this.state.str}</p>
        <ctx.Provider value={this.state}>
          <ChildB/>
        </ctx.Provider>
      </div>
    );
  }
}

export default Parent;