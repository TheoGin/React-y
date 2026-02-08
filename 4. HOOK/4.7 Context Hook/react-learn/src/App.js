import React, { useContext } from "react";

const context = React.createContext();

/* function Test() {
  // 会导致组件层级变深
  return <context.Consumer>
    { value => {
      return <h1>Text, 上下文的值：{ value }</h1>;
    } }
  </context.Consumer>;
} */
function Test() {
  // function useContext<T>(context: Context<T>): T; 用于获取上下文数据
  const value = useContext(context);
  return <h1>Text, 上下文的值：{ value }</h1>;
}

function App() {

  return (
    <context.Provider value="abc">
      <Test />
    </context.Provider>
  );
}

export default App;