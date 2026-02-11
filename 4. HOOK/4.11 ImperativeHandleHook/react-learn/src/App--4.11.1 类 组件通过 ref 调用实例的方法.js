import React, { Component, useRef } from "react";

class Test extends Component {
  method() {
    console.log("Test Component method called");
  }

  render() {
    return <h1>Test Component</h1>;
  }
}

function App() {
  const testRef = useRef();

  /* useEffect(() => {
   testRef.current.method(); // Test Component method called
   }, []); */

  return (
    <div>
      <Test ref={ testRef } />
      <button onClick={() => {
        testRef.current.method(); // Test Component method called
      }}>点击调用Test组件的method方法</button>
    </div>
  );
}

export default App;