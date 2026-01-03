import React, {Component} from "react";
import NewLifeCycle from "./NewLifeCycle";

class App extends Component {
  state = {
    n: 1,
  }
  render() {
    return (
      <>
        <NewLifeCycle {...this.state}/>
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

export default App;