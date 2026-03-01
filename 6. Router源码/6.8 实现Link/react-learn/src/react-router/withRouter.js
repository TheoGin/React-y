import React from "react";
import RouterContext from "./RouterContext";

export default function withRouter(Comp) {
  return function RouterWrapper(props) {
    // 设置组件在调试工具中显示的名字
    RouterWrapper.displayName = `withRouter(${ Comp.displayName || Comp.name })`;

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