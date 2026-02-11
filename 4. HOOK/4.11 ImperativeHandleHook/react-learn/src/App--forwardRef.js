import React, { useRef } from "react";

function Test (props, ref) {

  return <h1 ref={ref}>Test Component</h1>
}

const TestWrapper = React.forwardRef(Test);

function App() {
  const testRef = useRef();

  return (
    <div>
      <TestWrapper ref={ testRef } />
      <button onClick={() => {
        console.log(testRef.current);
        // testRef.current.method(); // Test Component method called
      }}>点击调用Test组件的method方法</button>
    </div>
  );
}

export default App;