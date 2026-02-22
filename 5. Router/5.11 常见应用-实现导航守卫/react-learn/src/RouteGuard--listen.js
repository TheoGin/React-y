import { Component } from "react";
import { withRouter } from "react-router-dom";

// import { BrowserRouter as Router } from "react-router-dom";

class RouteGuard extends Component {
  componentDidMount() {
    /**
     * listen: 添加一个监听器，监听地址的变化，当地址发生变化时，会调用传递的函数
     * 1. 参数：函数，运行时间点：发生在即将跳转到新页面时
     *   1. 参数1：location对象，记录当前的地址信息
     *   2. 参数2：action，一个字符串，表示进入该地址的方式
     *     1. POP：出栈
     *       1. 通过点击浏览器后退、前进
     *       2. 调用history.go
     *       3. 调用history.goBack
     *       4. 调用history.goForward
     *     2. PUSH：入栈
     *       1. history.push
     *     3. REPLACE：替换
     *       1. history.replace
     * 2. 返回结果：函数，可以调用该函数取消监听
     */
    // type Action = 'PUSH' | 'POP' | 'REPLACE';
    // listen(listener: (location: Location<S>, action: Action) => Function): UnregisterCallback;
    const unListen = this.props.history.listen((location, action) => {
      this.props.onPathChange && this.props.onPathChange(this.props.location, location, action, unListen);
    });
  }

  render() {
    return (
      /* <Router>
       { this.props.children }
       </Router> */
      null
    );
  }
}

export default withRouter(RouteGuard);