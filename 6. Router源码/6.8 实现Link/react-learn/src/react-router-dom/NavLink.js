import React from "react";
import Link from "./Link";
import RouterContext from "../react-router/RouterContext";
import { matchPath } from "../react-router/matchPath";
import { createPath, parsePath } from "history";

function NavLink(props) {
  const {
    children,
    activeClass = "active",
    exact = false,
    strict = false,
    sensitive = false,
    ...rest
  } = props;

  return (
    <RouterContext.Consumer>
      { value => {
        let loc;
        if (typeof props.to === "string") {
          loc = parsePath(props.to);
        } else if (typeof props.to === "object") {
          loc = props.to;
        }
        // const pathRule = value.history.createHref(loc);
        const pathRule = createPath(loc);
        const matchResult = matchPath(pathRule, {exact, sensitive, strict}, value.location.pathname);
        console.log(pathRule);
        console.log(loc);
        console.log(matchResult);
        return <Link { ...rest } className={ matchResult ? activeClass : '' }>{ children }</Link>;
      }
      }
    </RouterContext.Consumer>
  );
}

export default NavLink;