import React from "react";
import { Link } from "react-router-dom";
import { routesConfig } from "./routesConfig";

/**
 * 根据name的值，查找对应的path，没有考虑有params的情况如果有，会比较复杂，需要用到第三方库path-to-regexp
 * @param name
 * @param routes
 * @param basePath
 * @returns {*}
 */
function getPathFromName(name, routes, basePath) {
  for (let route of routes) {
    const newPath = (basePath + route.path).replace(/\/\//, "/");
    if (route.name === name) {
      return newPath;
    }

    if (Array.isArray(route.children)) {
      const path = getPathFromName(name, route.children, newPath);
      if (path !== undefined) {
        return path;
      }
    }
  }
}


function BetterLink({ to, children, ...rest }) {

  if (to.name && typeof to.name === "string") {
    to.pathname = getPathFromName(to.name, routesConfig, "/");
    if (to.pathname === undefined) {
      throw new Error(`无效name: ${ to.name }, 找不到对应的 path`);
    }
  }
  return (
    <Link { ...rest } to={ to }>
      { children }
    </Link>
  );
}

export default BetterLink;