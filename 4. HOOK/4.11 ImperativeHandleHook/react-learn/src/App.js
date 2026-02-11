import React, { useImperativeHandle, useRef, useState } from "react";

function Test(props, ref) {

  /**
   * function useImperativeHandle<T, R extends T>(ref: Ref<T>|undefined, init: () => R, deps?: DependencyList): void;
   * 如果不给依赖项，则每次运行函数组件都会调用该方法
   * 如果使用了依赖项，则第一次调用后，会进行缓存，只有依赖项发生变化时才会重新调用函数
   * 相当于给 ref.current = 1
   *
   * `useImperativeHandle` customizes the instance value that is exposed to parent components when using`ref`.
   * As always, imperative code using refs should be avoided in most cases.
   *
   * `useImperativeHandle` should be used with `React.forwardRef`.
   */

  useImperativeHandle(ref, () => {
    console.log("useImperativeHandle");

    return {
      method: () => {
        console.log("Test Component method called");
      },
    };
  }, []);

  return <h1>Test Component</h1>;
}

const TestWrapper = React.forwardRef(Test);

function App() {
  const testRef = useRef();
  const [, forceUpdate] = useState({});

  return (
    <div>
      <TestWrapper ref={ testRef } />
      <button onClick={ () => {

        // console.log(testRef.current);
        testRef.current.method(); // Test Component method called
      } }>点击调用Test组件的method方法
      </button>
      <button onClick={ () => {
        forceUpdate({});
      } }>强制更新
      </button>
    </div>
  );
}

export default App;