import React from "react";
import Link from "./Link";
import RouterContext from "../react-router/RouterContext";
import { matchPath } from "../react-router/matchPath";
import { parsePath } from "history";

function NavLink(props) {
  const {
    // children, // 往下传即可
    activeClass = "active",
    exact = false,
    strict = false,
    sensitive = false,
    ...rest
  } = props;

  return (
    <RouterContext.Consumer>
      { value => {
        let loc;  // 保存to中的locaiton对象
        if (typeof props.to === "string") {
          loc = parsePath(props.to);
        } else if (typeof props.to === "object") {
          loc = props.to;
        }
        // const pathRule = value.history.createHref(loc);
        // const pathRule = createPath(loc); // /page1?a=1#b=2

        // 匹配不需要 path 和 hash
        const pathRule = loc.pathname; // /page1
        const matchResult = matchPath(pathRule, { exact, sensitive, strict }, value.location.pathname);

        // console.log(loc.pathname, 'loc.pathname');
        // console.log(createPath(loc), 'createPath(loc)');

        // return <Link { ...rest } className={ matchResult ? activeClass : "" }>{ children }</Link>;

        if (matchResult) {
          return <Link { ...rest } className={ activeClass } />;
        }
        return <Link { ...rest }/>;
      } }
    </RouterContext.Consumer>
  );
}

export default NavLink;