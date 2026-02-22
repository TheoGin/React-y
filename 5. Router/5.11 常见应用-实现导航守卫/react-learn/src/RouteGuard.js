import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Action, Location } from "history";

let prevLocationVal, currentLocationVal, actionVal;

class GuardHelper extends Component {
  componentDidMount() {
    /** block(prompt?: boolean | string | (location: Location<S>, action: Action) => string | false | void): UnregisterCallback;
     * 1. 参数1：阻塞消息
     *   - 字符串消息
     *   - 函数，函数的返回结果是一个字符串，用于表示阻塞消息
     *     - 参数1：location对象
     *     - 参数2：action值
     * 2. 参数2：回调函数，调用该函数并传递true，则表示进入到新页面，否则，不做任何操作
     */
    // block：设置一个阻塞，并同时设置阻塞消息，当页面发生跳转时，会进入阻塞，并将阻塞消息传递到路由根组件的getUserConfirmation方法。
    // - 返回一个回调函数，用于取消阻塞器
    this.unBlock = this.props.history.block((location, action) => {
      prevLocationVal = this.props.location;
      currentLocationVal = location;
      actionVal = action;
      return "jump?";
    });

    this.handleListen();
  }

/*   componentDidUpdate(prevProps, prevState, snapshot) {

    // 之前路径，跟现在路径相同，就不监听？该写在哪？
    this.handleListen();
  } */

  handleListen = () => {
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
    // listen(listener: (location: Location<S>, action: Action) => void): UnregisterCallback;
    this.unListen = this.props.history.listen((location, action) => {
      if (this.props.location.pathname !== location.pathname) {
        this.props.onPathChange && this.props.onPathChange(this.props.location, location, action, this.unListen, this.unBlock);
      }
    });
  };

  componentWillUnmount() {
    this.unListen();
    this.unBlock();
  }


  render() {
    return null;
  }
}

const GuardHelperWrapper = withRouter(GuardHelper);

class RouteGuard extends Component {

  render() {
    return (
      <Router
        getUserConfirmation={ (message, callback) => {
          // callback(window.confirm(message)); // 默认实现
          this.props.onConfirm && this.props.onConfirm(prevLocationVal, currentLocationVal, actionVal, message, callback, this.unListen, this.unBlock);
        } }
      >
        <GuardHelperWrapper onPathChange={ this.props.onPathChange } />
        { this.props.children }
      </Router>
    );
  }
}

// export default withRouter(RouteGuard); // withRouter是从上下文中拿路由信息，不能套 带 Router组件的
export default RouteGuard;