import React from "react";
import PropTypes from "prop-types";
import context from "./RouterContext";
import { matchPath } from "../matchPath";

export class Router extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    history: PropTypes.object
  };

  state = {
    location: this.props.history.location,
  };

  componentDidMount() {
    this.unListen = this.props.history.listen((location, action) => {
      // action
      // this.props.history.location.action = action; // 改父组件的数据可好？可以传递回调更改
      this.props.setHistoryAction(action);
      this.setState({
        location,
      });
    });
  }

  componentWillUnmount() {
    this.unListen(); // 取消监听
  }

  render() {

    const ctxValue = {
      history: this.props.history,
      location: this.state.location,
      // match: matchPath("/"), // 需要根据地址栏变化更新 matchPath，所以 location 需要使用 state
      match: matchPath("/", {}, this.state.location.pathname),
    };
    // console.log(ctxValue);

    return (
      <context.Provider value={ ctxValue }>
        { this.props.children }
      </context.Provider>
    );
  }
}