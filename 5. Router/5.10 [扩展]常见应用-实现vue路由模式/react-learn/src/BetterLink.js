import React from "react";
import { Link } from "react-router-dom";
import { routesConfig } from "./routesConfig";

function getPathFromName(name, routes, basePath) {
  if (name !== undefined && typeof name === "string") {
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
  throw new Error(`无效name: ${ name }, 找不到对应的 path`);
}


function BetterLink({ to, children, ...rest }) {
  return (
    <Link { ...rest } to={ getPathFromName(to.name, routesConfig, "/") }>
      { children }
    </Link>
  );
}

export default BetterLink;