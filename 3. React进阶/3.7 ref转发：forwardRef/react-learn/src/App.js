import React from "react";
import WithLog from "./HOC/WithLog";
import {A, B} from "./components/Comp";

const AComp = WithLog(A);
const BComp = WithLog(B);

class App extends React.Component {
  ARef = React.createRef();

  componentDidMount() {
    console.log(this.ARef); // {current: WithLogWrapper} 不是想要的
  }

  render() {
    return (
      <div>
        <AComp ref={this.ARef} />
        <BComp />
      </div>
    );
  }
}

export default App;