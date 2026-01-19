import React from "react";
import SelectTest from "./components/common/Select/Test";
import CheckboxGroupTest from "./components/common/CheckboxGroup/Test";
import RadioBoxGroupTest from "./components/common/RadioBoxGroup/Test";

function App(props) {
  return (
    <div>
     <CheckboxGroupTest/>
     <RadioBoxGroupTest/>
     <SelectTest/>
    </div>
  );
}

export default App;