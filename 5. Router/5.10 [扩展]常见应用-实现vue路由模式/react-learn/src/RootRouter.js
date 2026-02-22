import React from "react";
import { routesConfig } from "./routesConfig";
import { Route, Switch } from "react-router-dom";

/**
 * 根据一个路由配置数组，遍历该数组，得到一组Route组件
 * @param {*} routes
 * @param {*} basePath
 */
function getRoutes(routes, basePath) {
  if (!Array.isArray(routes)) {
    return null;
  }

  const routeCompArr = routes.map((route, index) => {
    const { component: Component, path, children, name, ...rest } = route;
    const newPath = (basePath + path).replace(/\/\//g, "/");
    return (
      <Route
        key={ index }
        { ...rest }
        path={ newPath }
        render={ (values) => {
          // values 路由相关信息需要传给 Component
          return <Component { ...values } children={ getRoutes(children, newPath) } />;
        } }
      />
    );
  });
  return (
    // 可以在每一个路由数组套一个 Switch
    <Switch>
      { routeCompArr }
    </Switch>
  );
}

/**
 * 使用Route组件，根据不同的路径，渲染顶级页面
 */
function RootRouter(props) {
  return (
    <>
      {/* 返回一组Route */ }
      {
        getRoutes(routesConfig, "/") // "/" 可以适配没有写 /的路径
      }
    </>
  );
}

export default RootRouter;