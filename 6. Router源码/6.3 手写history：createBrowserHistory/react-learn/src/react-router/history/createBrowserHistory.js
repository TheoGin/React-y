import { ListenManager } from "./ListenManager";
import { BlockManager } from "./BlockManager";

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
    throw new TypeError("path must be string or object");
  }
}

export default function createBrowserHistory(options) {
  const { basename = "", keyLength = 6, forceRefresh = false, getUserConfirmation } = options;
  const location = createLocation(basename);
  const listenManager = new ListenManager();
  const blockManager = new BlockManager(getUserConfirmation);

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
    replace,
    listen,
    block,
  };


  function push(path, state) {
    changePage(path, state, true);
  }

  function replace(path, state) {
    changePage(path, state, false);
  }

  function changePage(path, state, isPush) {
    const pathInfo = handlePathAndState(path, state, basename);
    const action = isPush ? "PUSH" : "REPLACE";

    // 要跳转完才能拿到最新的 location，但有阻塞又不能跳转，所以需要加一个方法生成 location
    const location = createLocationFromPath(pathInfo, basename, keyLength);
    console.log(location);
    blockManager.triggerBlock(location, action, ((isNext) => {
      if (isNext) {
        console.log("changePage triggerBlock isNext", isNext);
        history.action = action;
        // window.history.pushState(pathInfo.state, null, pathInfo.path); // 有可能是相同路径的 state 也相同，需要加上 key
        window.history[isPush ? "pushState" : "replaceState"]({
          key: generateKeyByLength(keyLength),
          state: pathInfo.state,
        }, null, pathInfo.path);
        // history.location = createLocation(basename);
        history.location = location;
        history.length = window.history.length;

        listenManager.triggerListener(history.location, history.action);

        if (forceRefresh) {
          // 强制刷新
          window.location.href = pathInfo.path;
        }
      }
    }));
  }

  function listen(listener) {
    return listenManager.addListener(listener);
  }

  function addListener() {
    window.addEventListener("popstate", () => {
      history.action = "POP";
      history.location = createLocation(basename);
      blockManager.triggerBlock(history.location, history.action, ((isNext) => {
        if (isNext) {
          listenManager.triggerListener(history.location, history.action);
        }
      }));
    });
  }

  addListener();

  function block(prompt) {
    /* const unListen = listen((location, action) => {
     blockManager.triggerBlock(((isNext) => {
     if (isNext) {
     console.log(isNext);
     }
     }));
     });

     const unBlock = blockManager.block(prompt, location, history.action);
     return () => {
     unListen();
     unBlock();
     }; */
    return blockManager.block(prompt);
  }

  return history;
}

function createLocationFromPath(pathInfo, basename, keyLength) {
  let { path = "", state } = pathInfo;

  // pathname
  const regExp = new RegExp(`^${basename}`);
  path = path.replace(regExp, "");
  let pathname = path;
  pathname = pathname.replace(/[?|#].*/g, "");

  const searchIndex = path.indexOf("?");
  const sharpIndex = path.indexOf("#");
  // search, 不能在 hash 后面
  let search;
  if (searchIndex > sharpIndex || searchIndex === -1) {
    search = "";
  } else {
    search = path.substring(searchIndex, sharpIndex);
  }

  // hash
  let hash;
  if (searchIndex === -1) {
    hash = "";
  } else {
    hash = path.substr(sharpIndex);
  }

  return {
    pathname,
    state,
    search,
    hash,
    key: generateKeyByLength(keyLength),
  };
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