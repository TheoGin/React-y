import React, { Component } from "react";
import ReactDOM from "react-dom";

class CompC extends Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('CompC componentDidUpdate');
  }

  render() {
    const h1Ele = document.getElementById('title');
    if (h1Ele) {
      console.log('h1Ele.innerHTML: ', h1Ele.innerHTML);
      // 更新的时候，可以拿到上一次的 h1Ele.innerHTML
    } else {
      console.log('h1Ele: ', h1Ele); // 一开始拿不到为 null
    }
    return (
      <div>
        <h1>{this.props.str}</h1>
      </div>
    )
  }
}

function CompB(props) {
  return (
    <div>
      <h1 id='title'>{props.str}</h1>
      <CompC str={props.str}  />
    </div>
  )
}

class CompA extends Component {

  state = {
    num: 123,
    str: 'abc'
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('CompA componentDidUpdate');
  }

  render() {
    return <div>
      <h1>{this.state.num}</h1>
      <CompB str={this.state.str} />
      <button onClick={() => {
        this.setState({
          num: 321,
          str: 'cba'
        })
      }}>更新 num 和 str</button>
    </div>;
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <CompA />
      </div>
    );
  }
}

ReactDOM.render((
  <>
    <App />
  </>
), document.getElementById("root"));

/*
一开始：
h1Ele:  null
var divOld = document.querySelector('div');

点击按钮后：
h1Ele.innerHTML:  abc
CompC componentDidUpdate
CompA componentDidUpdate
var divNew = document.querySelector('#root>div>div');
divOld === divNew; // true
 *  */