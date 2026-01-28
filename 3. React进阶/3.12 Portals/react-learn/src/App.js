import React from "react";
import Comp1 from "./components/Comp1";
import Comp3 from "./components/Comp3";
import Index from "./components/ErrorBound";

export default function App(props) {
  return (
    <div>
      <h1>App1</h1>
      <Index>
        <Comp1 />
      </Index>
      <Comp3 />
    </div>
  );
}

