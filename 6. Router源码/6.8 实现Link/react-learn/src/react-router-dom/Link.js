import React from "react";
import RouterContext from "../react-router/RouterContext";
import { parsePath } from "history";
// parsePath的作用，是根据一个路径字符串，返回一个location对象

function Link(props) {
  let { to, children, ...rest } = props;
  // let href = "";
  let loc;



  if (typeof to === "string") {

    /*
     // 这样漏掉 basename
     href = history.createHref({
       pathname: to,
     }); */
    // 将props.to转换为location对象
    loc = parsePath(to);
  } else if (typeof to === "object") {
    // href = history.createHref(to);
    loc = to;
  }

  return (
    <RouterContext.Consumer>
      {
        (value) => {
          const href = value.history.createHref(loc); // 控制台 element 展示用，需要 basename + url
          return <a href={ href } {...rest} onClick={ (e) => {
            e.preventDefault();
            // value.history.push(href); // 错误写法，因为 push内部已经加了 basename
            value.history.push(loc);
          } }>{ children }</a>;
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
