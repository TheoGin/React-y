import React, { Component } from "react";
import context from "./RouterContext";
import { matchPath } from "./matchPath";

// 用于匹配路由，并将匹配的结果放入到上下文中
class Route extends Component {

  /** 此处应写 static propTypes
   * path：路径规则，可以是字符串，可以是字符串数组
   * children：无论是否匹配，都应该渲染的子元素
   * render：匹配成功后，渲染函数
   * component：匹配成功后，渲染的组件

   以下是调用matchPath方法时的配置
   * exact
   * strict
   * sensitive
   */

  /* static defaultProps = {
   path: '/'
   } */

  /**
   * 在上下文提供者内部渲染的内容
   * @param {*} ctxValue
   */
  renderContent(ctxValue) {
    // 1、children有值，并且传递的不是 null
    if (this.props.children !== undefined && this.props.children !== null) {
      // 无论是否匹配都要渲染
      if (typeof this.props.children === "function") {
        return this.props.children(ctxValue);
      } else {
        return this.props.children;
      }
    }

    // 2、children没有值
    if (!ctxValue.match) {
      // 2.1 没有匹配
      return null;
    }

    // 2.2 匹配了
    // 2.2.1 component有值
    const Comp = this.props.component;
    if (Comp) {
      if (this.props.render) {
        console.warn(`warn: You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored Error Component Stack`);
      }
      return <Comp { ...ctxValue } />;
    }

    // 2.2.2 render有值
    // if (this.props.render) {
    if (typeof this.props.render === "function") {
      return this.props.render(ctxValue);
    }

    return null;
  };

  /**
   * 根据指定的location对象，返回match对象
   */
  matchRoute(location) {

    const {
      exact = false,
      sensitive = false,
      strict = false,
    } = this.props;

    // 没有写 path，无论如何都会匹配
    return matchPath(this.props.path || "/", {
      exact,
      sensitive,
      strict,
    }, location.pathname);
  }

  /**
   * 上下文中消费者函数
   */
  consumerFunc = (value) => {
    /* const cxtValue = {
     ...value,
     match: this.matchRoute(value),
     }; */
    const cxtValue = {
      history: value.history,
      location: value.location,
      match: this.matchRoute(value.location),
    };
    return (
      <context.Provider value={ cxtValue }>
        { this.renderContent(cxtValue) }
      </context.Provider>
    );
  };

  render() {

    return (
      <context.Consumer>
        { this.consumerFunc }
        {/* { value => {
         const cxtValue = { ...value };
         return (
         <context.Provider value={ cxtValue }>
         { this.renderContent(cxtValue) }
         </context.Provider>
         );
         } } */ }
      </context.Consumer>
    );
  }
}

export default Route;

