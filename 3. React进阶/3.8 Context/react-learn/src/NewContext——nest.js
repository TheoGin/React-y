import React, {Component} from "react";


// 上下文是一个独立于组件的对象，该对象通过React.createContext(默认值)创建。返回的是一个包含两个属性的对象
/*
export function React.createContext<unknown>(
    defaultValue: unknown,
): Context<unknown>

interface Context<T> {
    Provider: Provider<T>;
    Consumer: Consumer<T>;
}
* */
/*
// 可以传递默认值
const ctx1 = React.createContext({
  num: 123,
  str: 'abc',
});*/
const ctx1 = React.createContext();
const ctx2 = React.createContext();

class ChildB extends Component {
  render() {
    return (
      <div>
        <h1>ChildB后代子组件获取上下文数据：</h1>
        {/* Consumer 类组件也可以用 */}
        <ctx1.Consumer>
          {(ctxData) => {
            return (<>
              <h3>来自 ctx1 上下文数据：</h3>
              <p>
                num: {ctxData.num}
                <button onClick={() => {
                  ctxData.setNum(ctxData.num + 2);
                }}>num+2
                </button>
              </p>
              <p>str: {ctxData.str}</p>

              {/* Consumer 可以嵌套 Consumer */}
              <ctx2.Consumer>
                {(ctx2Data) => {
                  return (<>
                    <h3>来自 ctx2 上下文数据：</h3>
                    <p>
                      num: {ctx2Data.num}
                    </p>
                    <p>str2: {ctx2Data.str2}</p>
                  </>);
                }}
              </ctx2.Consumer>
            </>);
          }}
        </ctx1.Consumer>
      </div>
    );
  }
}

function ChildA(props) {
  return (
    <div>
      {/* Provider 可以嵌套 Consumer */}
      <ctx2.Provider value={
        {
          num: 789,
          str2: "aaa",
        }
      }>
        <h1>【函数组件】ChildA子组件获取上下文数据：</h1>
        <ctx1.Consumer>
          {(ctxData) => {
            console.log("ctxData", ctxData); // ctxData {num: 141, str: 'abc', setNum: ƒ}
            return (
              <>
                <p>
                  num: {ctxData.num}
                </p>
                <p>str: {ctxData.str}</p>
              </>
            );
          }}
        </ctx1.Consumer>
        <ChildB/>
      </ctx2.Provider>
    </div>
  )
    ;
}

// 1. Provider属性：生产者。一个组件，该组件会创建一个上下文，该组件有一个value属性，通过该属性，可以为其数据赋值
class Parent extends Component {

  state = {
    num: 123,
    str: "abc",
    setNum: (newNum) => {
      this.setState({
        num: newNum,
      });
    },
  };

  // 写在需要获取数据的地方，而不是这里
  static contextType = ctx1;

  render() {
    return (
      <div>
        <h1>父组件的上下文数据：</h1>
        <p>
          num: {this.state.num}
          <button onClick={() => {
            this.setState({
              num: this.state.num + 1,
            });
          }}>num+1
          </button>
        </p>
        <p>str: {this.state.str}</p>
        <ctx1.Provider value={this.state}>
          <ChildA/>
        </ctx1.Provider>
      </div>
    );
  }
}

export default Parent;