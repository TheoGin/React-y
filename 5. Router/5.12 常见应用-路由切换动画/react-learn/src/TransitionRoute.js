import React from "react";
import { CSSTransition } from "react-transition-group";
import { Route } from "react-router-dom";
import "animate.css/animate.css";

function TransitionRoute({ component: Comp, ...rest }) {
  return (
    <Route exact { ...rest }>
      {/* children 无论如何都会渲染 */ }
      { ({ match }) => {
        return (
          <CSSTransition
            in={ !!match }
            timeout={ 500 }
            classNames={ {
              enter: "animate__animated animate__fadeInRight",
              exit: "animate__animated animate__fadeOutLeft",
            } }
            mountOnEnter
            unmountOnExit
          >
            <Comp />
          </CSSTransition>
        );
      } }
    </Route>
  );
}

export default TransitionRoute;