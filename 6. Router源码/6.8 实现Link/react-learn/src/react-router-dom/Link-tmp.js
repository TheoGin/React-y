import React from "react";
import RouterContext from "../react-router/RouterContext";
import {history} from  './BrowserRouter'

function Link(props) {
  let { to, children, ...rest } = props;
  let href = "";
  let loc;

  // 这样是不是会漏掉 basename

  if (typeof to === "string") {
    href = history.createHref({
      pathname: to,
    });
    // loc = parsePath(to);
    // console.log(loc);
  } else if (typeof to === "object") {
    href = history.createHref(to);
    // loc = to;
  }
  console.log(href);

  return (
    <RouterContext.Consumer>
      {
        (props) => {
          return <a href={ href } onClick={(e) => {
            e.preventDefault();
            props.history.push(href)
          }}>{ children }</a>;
        }
      }
    </RouterContext.Consumer>
  );
}

export default Link;

/* function LinkAnchor(props) {
 console.log(props);
 return null;
 } */
