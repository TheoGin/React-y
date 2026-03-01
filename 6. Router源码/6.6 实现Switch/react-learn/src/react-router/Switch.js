import React, { Component } from "react";
import RouterContext from "./RouterContext";
import { matchPath } from "./matchPath";
import Route from "./Route";

class Switch extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        { this.getMatchChild }
      </RouterContext.Consumer>
    );
  }

  /**
   * 循环children，得到第一个匹配的 Route 组件，若没有匹配，则返回null
   */
  getMatchChild = (ctx) => {
    // const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
    let children = [];
    if (Array.isArray(this.props.children)) {
      children = this.props.children;
    } else if (typeof this.props.children === "object") {
      // 只有一个 子元素 的时候，是一个对象
      children = [this.props.children];
    }

    for (const child of children) {
      // 不能使用 child.type instanceof Route，因为 child.type 就是 Route类本身
      if (child.type !== Route) {
        // 子元素不是 Route 组件
        console.warn("Warning: React does not recognize the `computedMatch` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `computedmatch` instead. If you accidentally passed it from a parent component, remove it from the DOM element.");
      }

      const {
        path = "/",
        exact = false,
        strict = false,
        sensitive = false,
      } = child.props;

      // 判断该子元素是否能够匹配
      // const matchResult = matchPath((child.props && child.props.path) || "/", {}, ctx.location.pathname);
      const matchResult = matchPath(path, {
        exact,
        sensitive,
        strict,
      }, ctx.location.pathname);

      if (matchResult) {
        // 该 Route组件匹配了
        return child;
      }
    }

    return null;
  };
}

export default Switch;