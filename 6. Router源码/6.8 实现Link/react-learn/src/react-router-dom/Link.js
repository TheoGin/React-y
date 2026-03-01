import React from "react";
import RouterContext from "../react-router/RouterContext";
import createBrowserHistory, { createLocationFromPath } from "./history/createBrowserHistory";
import { createLocation } from "history";


const history = createBrowserHistory();

function Link(props) {
  let { to, children, ...rest } = props;
  let href = "";

  // 这样是不是会漏掉 basename

  if (typeof to === "string") {
    href = {
      pathname: to,
    };
  } else if (typeof to === "object") {
    href = history.createHref(to);
    console.log(href);
  }

  return (
    <RouterContext.Consumer>
      {
        ({ location, history }) => {
          return <a href={ href } onClick={(e) => {
            e.preventDefault();
            history.push(href)
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
