import React from "react";
import { Redirect, Route } from "react-router-dom";
import { loginInfo } from "./loginInfo";

function ProtectedRoute({ component: Component, children, render, ...rest }) {
  return (
    // 除了 3 个渲染 相关的，其余的直接传给 Route
    // render?: ((props: RouteComponentProps<Params>) => React.ReactNode) | undefined;
    <Route
      { ...rest }
      render={ values => {
        // console.log(values); // {history: {…}, location: {…}, match: {…}, staticContext: undefined}

        if (loginInfo.isLogin) {
          // 可以正常展示页面
          return <Component />;
        }

        // location: {pathname: '/personal', search: '', hash: '', state: undefined, key: 'n31z9k'}
        return <Redirect to={ {
          pathname: "/login",
          // 1、url：http://localhost:3000/login?returnurl=/personal
          // search: `returnurl=${ values.location.pathname }`,

          // 2、http://localhost:3000/login url保持原样
          state: values.location.pathname,
        } } />;
      } }
    />
  );
}

export default ProtectedRoute;