import React, { Component } from "react";
import FadeTransition from "./components/common/FadeTransition";
import { SwitchTransition } from "react-transition-group";

class App extends Component {
  state = {
    show: true,
  };

  render() {
    return (
      // 有了 SwitchTransition组件 in={ this.state.show } 可以不用穿
      <div>
        <SwitchTransition>
          <FadeTransition key={ this.state.show } appear timeout={ 1000 }>
            <h1>{ this.state.show ? "显示" : "隐藏" }</h1>
          </FadeTransition>
        </SwitchTransition>
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