import React from "react";
import { routesConfig } from "./routesConfig";
import { Route } from "react-router-dom";

/**
 * 根据一个路由配置数组，遍历该数组，得到一组Route组件
 * @param {*} routes
 * @param {*} basePath
 */
function getRoutes(routes, basePath) {
  if (!Array.isArray(routes)) {
    return null;
  }

  return routes.map((route, index) => {
    const { component: Component, path, children, ...rest } = route;
    const newPath = (basePath + path).replace(/\/\//, "/");
    return (
      <Route
        key={ index }
        { ...rest }
        path={ newPath }
        render={ () => {
          return <Component children={ getRoutes(children, newPath) } />;
        } }
      />
    );
  });
}

function RootRouter(props) {
  return (
    <>
      {/* 返回一组Route */}
      {
        getRoutes(routesConfig, "/") // "/" 可以适配没有写 /的路径
      }
    </>
  );
}

export default RootRouter;