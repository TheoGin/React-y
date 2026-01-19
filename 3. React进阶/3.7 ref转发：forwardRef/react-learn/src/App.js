import React from "react";
import WithLog from "./HOC/WithLog";
import {A, B} from "./components/Comp";
import WithLogin from "./HOC/WithLogin";

const AComp = WithLogin(WithLog(A, 'aaa'));
const BComp = WithLogin(WithLog(B, 'bbb'));

class App extends React.Component {
  state ={
    count:1
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <AComp a={1} isLogin={true}  />
        <BComp b={2} isLogin  />
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
        }}>重新渲染</button>
      </div>
    );
  }
}

export default App;