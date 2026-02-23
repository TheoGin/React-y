import pathToRegexp from "path-to-regexp";

/**
 *
 * @param groups 值 ['abc', '1']
 * @param keys 键  [0: {name: 'id', prefix: '/', delimiter: '/', optional: false, repeat: false, …}, ...]
 * @returns {{}}
 */
function getParams(groups, keys) {
  const params = {};
  for (let i = 0; i < groups.length; i++) {
    const key = keys[i].name;
    const value = groups[i];
    params[key] = value;
  }

  return params;
}

function getOptions(options) {
  const defaultOptions = {
    exact: false,
    sensitive: false,
    // strict: false,
  };

  const opt = Object.assign({}, defaultOptions, options);

  return {
    end: opt.exact,  // 是否严格匹配 end Validate the match reaches the end of the string. (default: true)
    sensitive: opt.sensitive,
  };
}

/**
 * mathch对象
 * @param pathRule
 * @param pathname
 * @param options
 */
function matchPath(pathRule, options, pathname) {
  pathname = pathname || window.location.pathname;
  options = getOptions(options);
  // console.log(options); // {end: false, sensitive: false}
  const keys = [];

  const regexp = pathToRegexp(pathRule, keys, options);
  /**
   * '/news' | '/news/'         /^\/news(?:\/(?=$))?$/i
   * '/news/:id/:page'          /^\/news\/((?:[^\/]+?))\/((?:[^\/]+?))(?:\/(?=$))?$/i
   * '/news/:id/:page(\d+)'     /^\/news\/((?:[^\/]+?))\/((?:\d+))(?:\/(?=$))?$/i
   * '/news/:id/:page(\d+)?'    /^\/news\/((?:[^\/]+?))(?:\/((?:\d+)))?(?:\/(?=$))?$/i
   */
    // console.log(regexp);
  const execResult = regexp.exec(pathname);
  // console.log(execResult);
  // console.log(keys); // [0: {name: 'id', prefix: '/', delimiter: '/', optional: false, repeat: false, …}, ...]
  if (!execResult) {
    return null;
  }

  const groups = execResult.slice(1);
  const params = getParams(groups, keys);

  return {
    params,
    path: pathRule,
    url: execResult[0], // 真正匹配到的那一部分，如 http://localhost:3000/news/abc/1/adsa，实际匹配的是：url: '/news/abc/1'
    isExact: execResult[0] === pathname,
  };
}


// matchPath('/news/:id/:page?' , "/news/aaa/111/")
console.log(matchPath("/news/:id/:page(\\d+)?", {
  exact: false,
  // trailing: true, // 无效
  // strict: true, // 无效
  sensitive: false,
}, "/NEws/aaa/111/")); // 字符串里 两个斜杠才算一个斜杠！！！