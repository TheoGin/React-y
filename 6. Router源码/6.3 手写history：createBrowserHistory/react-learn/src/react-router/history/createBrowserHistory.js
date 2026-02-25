function handlePathAndState(path, state, basename = "") {
  if (typeof path === "string") {
    return {
      path: basename + path,
      state,
    };
  } else if (typeof path === "object") {

    let { pathname = "", search = "", hash = "" } = path;
    if (search !== "" && search.charAt(0) !== "?") {
      search = "?" + search;
    }

    if (hash !== "" && hash.charAt(0) !== "#") {
      hash = "#" + hash;
    }
    return {
      path: basename + pathname + search + hash,
      state: path.state,
    };
  } else {
    throw new Error("path must be string or object");
  }
}

export default function createBrowserHistory(options) {
  const { basename = "", keyLength = 6, forceRefresh = false } = options;
  const location = createLocation(basename);

  // key: generateKeyByLength(keyLength),

  function go(step) {
    window.history.go(step);
  }

  function goForward() {
    window.history.forward();
  }

  function goBack() {
    window.history.back();
  }

  const history = {
    action: "POP",
    location,
    // go: window.history.go, // Uncaught TypeError: Illegal invocation 会有 this 指向问题
    go,
    goForward,
    goBack,
    length: window.history.length,
    push,
  };

  function push(path, state) {
    const pathInfo = handlePathAndState(path, state, basename);
    console.log(pathInfo);
    history.action = "PUSH";
    // window.history.pushState(pathInfo.state, null, pathInfo.path); // 有可能是相同路径的 state 也相同，需要加上 key
    window.history.pushState({
      key: generateKeyByLength(keyLength),
      state: pathInfo.state,
    }, null, pathInfo.path);
    // history.location = createLocation(basename);
    if (forceRefresh) {
      // 强制刷新
      window.location.href = pathInfo.path;
    }
  }

  return history;
}


// {pathname: '/abc', search: '?a=1&b=2', hash: '#d=3', state: undefined}
function createLocation(basename = "") {
  let { pathname, search, hash } = window.location;
  if (search !== "" && search.charAt(0) !== "?") {
    search = "?" + search;
  }

  if (hash !== "" && hash.charAt(0) !== "#") {
    hash = "#" + hash;
  }

  const regExp = new RegExp(`^${basename}`);
  pathname = pathname.replace(regExp, "");

  const location = {
    pathname,
    search,
    hash,
  };

  let state;
  const historyState = window.history.state;
  if (historyState === null) {
    state = undefined;
  } else if (typeof historyState !== "object") {
    state = historyState;
  } else {
    // 对象
    if ("key" in historyState) {
      location.key = historyState.key;
      state = historyState.state; // 取出 historyState 的 state，即 window.history.state.state，防止污染其他第三方库的使用
    } else {
      state = historyState; // 整个对象直接赋值
    }
  }
  location.state = state;

  return location;
}

function generateKeyByLength(length) {
  // 36进制，刚好包括 26 个字母 + 10个数字
  return Math.random().toString(36).substr(2, length);
}