function getPathname(path, state) {
  if (typeof path === "string") {
    return {
      path,
      state,
    };
  }
  let { pathname = "", search = "", hash = "" } = path;
  if (search !== "" && search.charAt(0) !== "?") {
    search = "?" + search;
  }

  if (hash !== "" && hash.charAt(0) !== "#") {
    hash = "#" + hash;
  }
  return {
    path: pathname + search + hash,
    state: path.state,
  };
}

export default function createBrowserHistory(options) {
  const { basename = "", keyLength = 6, forceRefresh = false } = options;
  const location = createLocation(basename, keyLength);

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
    const pathname = getPathname(path, state);
    console.log(pathname);
    window.history.pushState(pathname.state, null, pathname.path);
    if (forceRefresh) {
      window.location.href = pathname.path;
    }
  }

  return history;
}


// {pathname: '/abc', search: '?a=1&b=2', hash: '#d=3', state: undefined}
function createLocation(basename, keyLength) {
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
    key: generateKeyByLength(keyLength),
  };

  let state;
  const historyState = window.history.state;
  if (historyState === null) {
    state = undefined;
  } else if (typeof historyState === "string") {
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