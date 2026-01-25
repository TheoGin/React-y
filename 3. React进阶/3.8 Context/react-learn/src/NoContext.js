import React, {Component} from "react";

class ChildB extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('运行了优化');
    /*
    childB render
    运行了优化
    * */
    return false;
  }

  render() {
    console.log("childB render");
    return (
      <div>
        <h1>子组件组件通过 props 获取的数据：</h1>
        <h2>num：{this.props.num}, str: {this.props.str}</h2>
      </div>
    );
  }
}


// 1. Provider属性：生产者。一个组件，该组件会创建一个上下文，该组件有一个value属性，通过该属性，可以为其数据赋值
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

  render() {
    return (
      <div>
        <p>
          num: {this.state.num}
          <button onClick={() => {
            this.setState({
              num: this.state.num + 1,
            });
          }}>num+1
          </button>
        </p>
        <p>str: {this.state.str}</p>
        <ChildB {...this.state} />
      </div>
    );
  }
}

export default Parent;