import React, { Component } from "react";
import FadeTransition from "./components/common/FadeTransition";

class App extends Component {
  state = {
    show: true,
  };

  render() {
    return (
      <div>
        <FadeTransition in={ this.state.show }>
          <h1>标题</h1>
        </FadeTransition>
        <button onClick={ () => {
          this.setState({
            show: !this.state.show,
          });
        } }>切换
        </button>
      </div>
    );
  }
}

export default App;