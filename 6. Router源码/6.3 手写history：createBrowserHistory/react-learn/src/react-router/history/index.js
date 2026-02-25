// import  {createBrowserHistory as default } from './createBrowserHistory'
// import  createBrowserHistory from './createBrowserHistory'
import  {default as createBrowserHistory} from './createBrowserHistory'
const myHistory = createBrowserHistory({
  // 1. basename：设置根路径
  basename: "/news", // h.push('/abc') --->  http://localhost:3000/news/111

  // 2. forceRefresh：地址改变时是否强制刷新页面
  // forceRefresh: true,

  // 3. keyLength：location对象使用的key值长度 - 地址栈中记录的并非字符串，而是一个location对象
  keyLength: 4, // key: "p6j4",

  // 4. getUserConfirmation：一个函数，该函数当调用history对象block函数后，发生页面跳转时运行
  getUserConfirmation: (message, callback) => {
    console.log(message);
    callback(window.confirm(message));
  },
});

window.myHistory = myHistory
