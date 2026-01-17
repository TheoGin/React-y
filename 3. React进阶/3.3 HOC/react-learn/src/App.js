import React from "react";
import WithLog from "./HOC/WithLog";
import {A, B} from "./components/Comp";

const AComp = new WithLog(A);
const BComp = new WithLog(B);
function App(props) {
  return (
    <div>
      <AComp/>
      <BComp/>
    </div>
  );
}

export default App;