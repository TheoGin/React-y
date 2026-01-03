import React, {Component} from "react";
import TestErrorExampleChildComp from "./TestErrorExampleChildComp";

class TestErrorExample extends Component {
  state = {
    n: 1,
  }
  render() {
    return (
      <>
        <TestErrorExampleChildComp {...this.state}  />
        <p>
          <button onClick={
            () => {
              this.setState({
                n: this.state.n + 1
              })
            }
          }>父组件按钮：属性+1</button>
        </p>
      </>
    );
  }
}

export default TestErrorExample;