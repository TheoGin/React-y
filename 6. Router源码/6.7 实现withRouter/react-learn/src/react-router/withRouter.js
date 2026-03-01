import React from "react";
import RouterContext from "./RouterContext";

export default function withRouter(Comp) {
  return function WithRouterWrapper(props) {
    return (
      <RouterContext.Consumer>
        {
          value => {
            return <Comp { ...props } { ...value } />;
          }
        }
      </RouterContext.Consumer>
    );
  };
}