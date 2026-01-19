import React from "react";

// Warning: forwardRef render functions accept exactly two parameters: props and ref. Did you forget to use the ref parameter?
function F(props, ref) {
  return <h1 ref={ref}>函数组件F</h1>
}

// 传递函数组件F，得到一个新组件NewF
const NewF = React.forwardRef(F);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fComp = React.createRef();
  }

  componentDidMount() {
    console.log(this.fComp);
  }

  render() {
    return (
      <div>
        {/* Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?*/}
        {/*<F ref='fComp' />*/}
        <NewF ref={this.fComp} />
      </div>
    );
  }
}

export default App;