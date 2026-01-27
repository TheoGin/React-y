import React, { PureComponent } from "react";
import Comp2 from "./Comp2";

class Comp1 extends PureComponent {
  render() {
    return (<div>
      <h1>Comp1</h1>
      <Comp2 />
    </div>);
  }
}

export default Comp1;