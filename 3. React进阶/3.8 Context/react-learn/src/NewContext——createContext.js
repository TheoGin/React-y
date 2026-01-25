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
const ctx = React.createContext({
  num: 123,
  str: 'abc',
});*/
const ctx = React.createContext();

class ChildB extends Component {
  // 1. 在类组件中，直接使用this.context获取上下文数据
  //   1. 要求：必须拥有静态属性 contextType , 应赋值为创建的上下文对象
  static contextType = ctx; // 注：不是 childContextType

  render() {
    return (
      <div>
        <h1>ChildB后代子组件获取上下文数据：</h1>
        <p>
          num: {this.context.num}
          <button onClick={() => {
            this.context.setNum(this.context.num + 2);
          }}>num+2
          </button>
        </p>
        <p>str: {this.context.str}</p>
      </div>
    );
  }
}

function ChildA(props) {
  return (
    <div>
      <h1>【函数组件】ChildA子组件获取上下文数据：</h1>
      {/*<ctx.Consumer children={(ctxData) => {
        console.log('ctxData', ctxData);
        return (
          <>
            <p>
              num: {ctxData.num}
            </p>
            <p>str: {ctxData.str}</p>
          </>
        );
      }}></ctx.Consumer>*/}
      {/* 上面的语法糖 */}
      <ctx.Consumer>
        // 2. 在函数组件中，需要使用Consumer来获取上下文数据
        //   2.1. Consumer是一个组件
        //   2.2. 它的子节点，是一个函数（它的props.children需要传递一个函数）
        {(ctxData) => {
          console.log("ctxData", ctxData);
          return (
            <>
              <p>
                num: {ctxData.num}
              </p>
              <p>str: {ctxData.str}</p>
            </>
          );
        }}
      </ctx.Consumer>
      <ChildB/>;
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
  static contextType = ctx;

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
        <ctx.Provider value={this.state}>
          <ChildA/>
        </ctx.Provider>
      </div>
    );
  }
}

export default Parent;