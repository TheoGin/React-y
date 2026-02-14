import React from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import "./index.css";

function FadeTransition(props) {
  return (
    <CSSTransition
      timeout={ props.timeout }
      in={ props.in }
      appear={ props.appear }
      classNames="fade"
      style={ {
        // transition: props.transitionTime, // 无效，该如何加？
      } }
      {...props}
    >
      { props.children }
    </CSSTransition>
  );
}

FadeTransition.defaultProps = {
  timeout: 500,
  in: true,
  appear: true,
  // transitionTime: 500,
  mountOnEnter: true,
};

FadeTransition.propTypes = {
  timeout: PropTypes.number,
  in: PropTypes.bool,
  appear: PropTypes.bool,
  mountOnEnter: PropTypes.bool,
  // transitionTime: PropTypes.number,
};

export default FadeTransition;