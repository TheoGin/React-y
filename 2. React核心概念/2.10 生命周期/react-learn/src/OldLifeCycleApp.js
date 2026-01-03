import React, {Component} from "react";
import OldLifeCycle from "./OldLifeCycle";

class App extends Component {
  state = {
    n: 1,
    showOldLifeCycle: true,
  }
  render() {
    const comp = this.state.showOldLifeCycle ? <OldLifeCycle {...this.state} /> : null;
    return (
      <>
        { comp }
        <p>
          <button onClick={
            () => {
              this.setState({
                n: this.state.n + 1
              })
            }
          }>父组件按钮：属性+1</button>
        </p>
        <button onClick={
          () => {
            this.setState({
              showOldLifeCycle: !this.state.showOldLifeCycle
            })
          }
        }>显示/隐藏</button>
      </>
    );
  }
}

export default App;