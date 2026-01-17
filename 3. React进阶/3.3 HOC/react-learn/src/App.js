import React from "react";
import WithLog from "./HOC/WithLog";
import {A, B} from "./components/Comp";
import WithLogin from "./HOC/WithLogin";

const AComp = WithLogin(WithLog(A, 'aaa'));
const BComp = WithLogin(WithLog(B, 'bbb'));

class App extends React.Component {
  state ={
    count:1
  }
  render() {
    // 1. 不要在render中使用高阶组件，否则组件不会重用，会导致每次都销毁、创建、销毁、创建、……
    /*
    组件A创建完毕，时间为：1768661125231
    组件B创建完毕，时间为：1768661125231
    组件A即将被销毁，时间为：1768661129275
    组件B即将被销毁，时间为：1768661129276
    组件A创建完毕，时间为：1768661129276
    组件B创建完毕，时间为：1768661129277
    * */
    /*const AComp = WithLogin(WithLog(A, 'aaa'));
    const BComp = WithLogin(WithLog(B, 'bbb'));*/
    return (
      <div>
        <h1>{this.state.count}</h1>
        <AComp a={1} isLogin={true}  />
        <BComp b={2} isLogin  />
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
        }}>重新渲染</button>
      </div>
    );
  }
}

export default App;