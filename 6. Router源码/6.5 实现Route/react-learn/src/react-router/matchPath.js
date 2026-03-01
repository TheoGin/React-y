import pathToRegexp from "path-to-regexp";

/**
 * 根据匹配的分组结果，得到一个params对象
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

/**
 * 将传入的react-router配置，转换为path-to-regexp的配置
 * @param {*} options
 */
function getOptions(options = {}) {
  const defaultOptions = {
    exact: false,
    sensitive: false,
    strict: false,
  };

  // const opt = Object.assign({}, defaultOptions, options);
  const opt = {...defaultOptions, ...options};

  return {
    end: opt.exact,  // 是否严格匹配 end Validate the match reaches the end of the string. (default: true)
    sensitive: opt.sensitive,
    strict: opt.strict
  };
}

/**
 * 得到匹配结果（match对象），如果没有匹配，返回null
 * @param pathRule 路径规则
 * @param options 相关配置，该配置是一个对象，该对象中，可以出现：exact、sensitive、strict
 * @param pathname 路径名
 */
export function matchPath(pathRule, options, pathname) {
  pathname = pathname || window.location.pathname;
  const keys = []; // 保存路径规则中的关键字

  // console.log(getOptions(options)); // {end: false, sensitive: false, strict: true}
  const regexp = pathToRegexp(pathRule, keys, getOptions(options));
  /**
   * '/news' | '/news/'         /^\/news(?:\/(?=$))?$/i
   * '/news/:id/:page'          /^\/news\/((?:[^\/]+?))\/((?:[^\/]+?))(?:\/(?=$))?$/i
   * '/news/:id/:page(\d+)'     /^\/news\/((?:[^\/]+?))\/((?:\d+))(?:\/(?=$))?$/i
   * '/news/:id/:page(\d+)?'    /^\/news\/((?:[^\/]+?))(?:\/((?:\d+)))?(?:\/(?=$))?$/i
   */
    // console.log(regexp);
  const execResult = regexp.exec(pathname); // 匹配url地址
  // console.log(execResult);
  // console.log(keys); // [0: {name: 'id', prefix: '/', delimiter: '/', optional: false, repeat: false, …}, ...]
  // 1、没有匹配
  if (!execResult) {
    return null;
  }

  // 2、匹配了
  const groups = execResult.slice(1);  // 得到匹配的分组结果
  const params = getParams(groups, keys);

  return {
    params,
    path: pathRule,
    url: execResult[0], // 真正匹配到的那一部分，如 http://localhost:3000/news/abc/1/adsa，实际匹配的是：url: '/news/abc/1'
    isExact: execResult[0] === pathname,
  };
}