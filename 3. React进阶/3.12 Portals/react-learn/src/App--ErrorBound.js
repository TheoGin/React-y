import React, { PureComponent } from "react";

function Comp3(props) {
  return (
    <div>
      <h1>Comp3</h1>
    </div>
  );
}

function getDatas() {
  return;
}

class Comp2 extends PureComponent {
  render() {
    const datas = getDatas();
    datas.map(item => item);
    return (
      <div>
        <h1>Comp2</h1>
      </div>
    );
  }
}

class Comp1 extends PureComponent {
  state = {
    hasError: false
  }

 /*  static getDerivedStateFromError(error) {
    console.log('error', error);
    return {
      hasError: true
    }
  } */

  componentDidCatch(error, errorInfo) {
    console.log('error', error);
    console.log('errorInfo', errorInfo);
    /* this.setState({
      hasError: true
    }) */
    console.log('记录错误消息日志');
  }

  render() {
    if (this.state.hasError) {
      return <div>error</div>
    }
    return (<div>
      <h1>Comp1</h1>
      <Comp2 />
    </div>);
  }
}

export default function App(props) {
  return (
    <div>
      <h1>App1</h1>
      <Comp1 />
      <Comp3 />
    </div>
  );
}

