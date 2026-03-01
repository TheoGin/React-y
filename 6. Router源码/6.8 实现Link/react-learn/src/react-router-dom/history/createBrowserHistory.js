import { ListenManager } from "./ListenManager";
import { BlockManager } from "./BlockManager";

/**
 * 创建一个history api的history对象
 * @param {*} options
 */
export default function createBrowserHistory(options = {}) {
  const {
    basename = "",
    keyLength = 6,
    forceRefresh = false,
    getUserConfirmation = (message, callback) => callback(window.confirm(message)),
  } = options;
  const listenManager = new ListenManager();
  const blockManager = new BlockManager(getUserConfirmation);

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
    location: createLocation(basename),
    // go: window.history.go, // Uncaught TypeError: Illegal invocation 会有 this 指向问题
    go,
    goForward,
    goBack,
    length: window.history.length,
    push,
    replace,
    listen,
    block,
    createHref,
  };

  /**
   * basename + url: '/news/112?a=1#b=2'
   * @param location
   */
  function createHref(location) {
    const {
      pathname = "",
      search = "",
      hash = "",
    } = location;
    return basename + pathname + search + hash;
  }

  /**
   * 向地址栈中加入一个新的地址
   * @param {*} path 新的地址，可以是字符串，也可以是对象
   * @param {*} state 附加的状态数据，如果第一个参数是对象，该参数无效
   */
  function push(path, state) {
    changePage(path, state, true);
  }

  function replace(path, state) {
    changePage(path, state, false);
  }

  /**
   * 抽离的，可用于实现push或replace功能的方法
   * @param {*} path
   * @param {*} state
   * @param {*} isPush
   */
  function changePage(path, state, isPush) {
    const pathInfo = handlePathAndState(path, state, basename);
    const action = isPush ? "PUSH" : "REPLACE";

    // 要跳转完才能拿到最新的 location，但有阻塞又不能跳转，所以需要加一个方法生成 location
    const location = createLocationFromPath(pathInfo, basename, keyLength);
    // blockManager.triggerBlock(location, action, ((isNext) => {
    // if (isNext) 明确调用可以跳转就可以不需要 isNext
    blockManager.triggerBlock(location, action, (() => {
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
    }));
  }

  /**
   * 添加一个监听器，并且返回一个可用于取消监听的函数
   * @param {*} listener
   */
  function listen(listener) {
    return listenManager.addListener(listener);
  }

  /**
   * 添加对地址变化的监听
   */
  function addDomListener() {
    // popstate事件，仅能监听前进、后退、用户对地址hash的改变
    // 无法监听到pushState、replaceState
    window.addEventListener("popstate", () => {
      history.action = "POP";
      history.location = createLocation(basename);
      blockManager.triggerBlock(history.location, history.action, (() => {
        listenManager.triggerListener(history.location, history.action);
      }));
    });
  }

  addDomListener();

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

  //返回history对象
  return history;
}

/**
 * 根据path和state，得到一个统一的对象格式
 * @param {*} path
 * @param {*} state
 * @param {*} basename
 */
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

export function createLocationFromPath(pathInfo, basename, keyLength) {
  let { path = "", state } = pathInfo;

  // pathname
  const regExp = new RegExp(`^${basename}`);
  let pathname = path.replace(regExp, "");
  // pathname = pathname.replace(/[?|#].*/g, "");
  pathname = pathname.replace(/[?#].*/g, "");

  const questionIndex = path.indexOf("?");
  const sharpIndex = path.indexOf("#");
  // search, 不能在 hash 后面
  let search;
  if (questionIndex > sharpIndex || questionIndex === -1) {
    search = "";
  } else {
    search = path.substring(questionIndex, sharpIndex);
  }

  // hash
  let hash;
  if (questionIndex === -1) {
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
  // 1. 如果historyState没有值，则state为undefined
  if (historyState === null) {
    state = undefined;

    // 2. 如果historyState有值
  } else if (typeof historyState !== "object") {
    // 2.1. 如果值的类型不是对象
    state = historyState;
  } else {
    // 2.2. 是对象
    if ("key" in historyState) {
      // 2.2.1. 该对象中有key属性，将key属性作为location的key属性值，并且将historyState对象中的state属性作为state属性值
      location.key = historyState.key;
      state = historyState.state; // 取出 historyState 的 state，即 window.history.state.state，防止污染其他第三方库的使用
    } else {
      // 2.2.2. 如果没有key属性，则直接将historyState赋值给state
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