import React from "react";
import { withRouter } from "react-router-dom";

function Link(props) {
  // console.log(props);

  // { ...props } Warning: React does not recognize the `staticContext` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `staticcontext` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
  return (
    <a href={ props.to } { ...props } onClick={ e => {
      e.preventDefault();

      props.history.push(props.to);
    } }>
      { props.children }
    </a>
  );
}

export default withRouter(Link);