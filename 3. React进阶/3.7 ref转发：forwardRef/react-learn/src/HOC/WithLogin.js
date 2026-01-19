import React from "react";

function WithLogin(Comp) {
  return function WithLoginWrapper(props) {
    if (props.isLogin) {
      return <Comp {...props} />;
    }
    return null;
  };
}

export default WithLogin;