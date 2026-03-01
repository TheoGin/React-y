import React, { Component } from "react";
import context from "./RouterContext";
import { matchPath } from "./matchPath";


/* class Route extends Component {

 renderContent = ({ location, history, match }) => {
 const {
 exact = false,
 sensitive = false,
 strict = false,
 children,
 component: Comp,
 } = this.props;
 const matchResult = matchPath(this.props.path, {
 exact,
 sensitive,
 strict,
 }, location.pathname);
 console.log(matchResult);
 const ctxValue = {
 location,
 history,
 match,
 };

 if (matchResult) {
 ctxValue.match = matchResult;
 if (children) {
 return (
 <context.Provider value={ ctxValue }>
 { children }
 </context.Provider>
 );
 } else if (Comp) {
 return <Comp {...ctxValue} />;
 }
 }
 return (
 <context.Provider value={ ctxValue }>
 { null }
 </context.Provider>
 );
 };

 render() {

 return (
 <context.Consumer>
 { this.renderContent }
 </context.Consumer>
 );
 }
 }

 export default Route; */


class Route extends Component {

  renderContent = (ctxValue) => {
    const {
      exact = false,
      sensitive = false,
      strict = false,
      children,
      component: Comp,
      render,
    } = this.props;

    const matchResult = matchPath(this.props.path, {
      exact,
      sensitive,
      strict,
    }, ctxValue.location.pathname);
    console.log(matchResult);

    if (matchResult) {
      ctxValue.match = matchResult;
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

  render() {

    return (
      <context.Consumer>
        { value => {
          const cxtValue = { ...value };
          return (
            <context.Provider value={ cxtValue }>
              { this.renderContent(cxtValue) }
            </context.Provider>
          );
        } }
      </context.Consumer>
    );
  }
}

export default Route;

