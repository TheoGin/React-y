import React from "react";

class C extends React.Component {
  render() {
    console.log(this.props); // {words: 'test words abc', forwardRef: {…}}
    return <h1 ref={this.props.forwardRef}>类组件C，words：{this.props.words}</h1>
  }
}

// Uncaught TypeError: Class constructor C cannot be invoked without 'new'  The above error occurred in the <ForwardRef(C)> component:
// const NewC = React.forwardRef(C);

// (props: PropsWithChildren<P>, ref: ((instance: T | null) => void) | MutableRefObject<T | null> | null): ReactElement | null;
const NewC = React.forwardRef((props, ref) => {
  return <C {...props} forwardRef={ref} />
});

class App extends React.Component {
  CRef = React.createRef();

  componentDidMount() {
    console.log(this.CRef); // this.CRef.current:  h1
  }

  render() {
    return (
      <div>
        {/* Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?*/}
        {/*<F ref='CRef' />*/}
        <NewC ref={this.CRef} words='test words abc' />
      </div>
    );
  }
}

export default App;