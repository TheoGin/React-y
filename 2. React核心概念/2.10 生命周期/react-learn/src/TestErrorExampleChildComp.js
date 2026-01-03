import React, {Component} from "react";

class TestErrorExampleChildComp extends Component {
  state = {
    num: this.props.n,
  }
  componentWillReceiveProps(currentProps) {
    console.log(currentProps);
    this.setState({
      num: currentProps.n
    })
  }

  render() {
    return (
      <div>
        <h1>错误使用生命周期 componentWillReceiveProps</h1>
        <h2>属性：{this.props.n}</h2>
        <h2>状态：{this.state.num}</h2>
        <p>
          <button onClick={
            () => {
              this.setState({
                num: this.state.num + 1,
              });
            }
          }>子组件按钮：状态+1
          </button>
        </p>
      </div>
    );
  }
}

export default TestErrorExampleChildComp;