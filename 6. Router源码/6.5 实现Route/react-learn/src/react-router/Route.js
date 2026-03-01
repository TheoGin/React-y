import React, { Component } from "react";
import context from "./RouterContext";
import { matchPath } from "./matchPath";

class Route extends Component {

  renderContent = (ctxValue) => {
    const {
      children,
      component: Comp,
      render,
    } = this.props;

    if (ctxValue.match) {
      if (children) {
        return children;
      } else if (Comp) {
        return <Comp { ...ctxValue } />;
      } else if (render) {
        return render(ctxValue);
      }
    }
    return null;
  };

  matchRoute(ctxValue) {

    const {
      exact = false,
      sensitive = false,
      strict = false,
    } = this.props;

    return matchPath(this.props.path, {
      exact,
      sensitive,
      strict,
    }, ctxValue.location.pathname);
  }

  consumerFunc = (value) => {
    /* const cxtValue = {
      ...value,
      match: this.matchRoute(value),
    }; */
    const cxtValue = {
      history: value.history,
      location: value.location,
      match: this.matchRoute(value),
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

