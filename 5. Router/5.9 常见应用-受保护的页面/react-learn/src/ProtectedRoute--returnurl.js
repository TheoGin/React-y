import React from "react";
import { Redirect, Route } from "react-router-dom";
import { loginInfo } from "./loginInfo";

/**
 *
 * @param Component
 * @param children
 * @param render
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function ProtectedRoute({ component: Component, children, render, ...rest }) {
  return (
    // 除了 3 个渲染 相关的，其余的直接传给 Route
    // render?: ((props: RouteComponentProps<Params>) => React.ReactNode) | undefined;
    <Route
      { ...rest }
      render={ values => {
        // console.log(values); // {history: {…}, location: {…}, match: {…}, staticContext: undefined}

        if (loginInfo.isLogin) {
          return <Component />;
        }

        // location: {pathname: '/personal', search: '', hash: '', state: undefined, key: 'n31z9k'}
        return <Redirect to={ {
          pathname: "/login",
          search: `returnurl=${ values.location.pathname }`,
        } } />;
      } }
    />
  );
}

export default ProtectedRoute;