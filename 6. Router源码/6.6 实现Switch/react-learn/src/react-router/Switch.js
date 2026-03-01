import React, { Component } from "react";
import RouterContext from "./RouterContext";
import { matchPath } from "./matchPath";
import Route from "./Route";

class Switch extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        { this.renderChildren }
      </RouterContext.Consumer>
    );
  }

  renderChildren = (ctx) => {
    for (const child of this.props.children) {
      // 不能使用 child.type instanceof Route，因为 child.type 就是 Route类本身
      if (child.type !== Route) {
        console.warn('Warning: React does not recognize the `computedMatch` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `computedmatch` instead. If you accidentally passed it from a parent component, remove it from the DOM element.');
      }
      const matchResult = matchPath(child.props.path || '/', {}, ctx.location.pathname);
      if (matchResult) {
        return child
      }
    }

    return null;
  };
}

export default Switch;