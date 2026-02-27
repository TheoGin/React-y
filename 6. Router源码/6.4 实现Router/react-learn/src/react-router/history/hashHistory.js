import { createHashHistory } from "history";

// 6.2.3 createHashHistory 创建一个使用浏览器hash的history对象。配置对象：
// - hashType：#号后给定的路径格式。默认为 slash
//   - hashbang：被chrome弃用，#!路径
//   - noslash：#a/b/c
//   - slash：#/a/b/c
const history = createHashHistory({
  // hashType: 'hashbang', // http://localhost:3000/news/ddd#!/aaa
  // hashType: 'noslash', // http://localhost:3000/news/ddd#aaa
  hashType: 'slash', // http://localhost:3000/news/ddd#/aaa
  getUserConfirmation: (msg, callback) => {
    callback(window.confirm(msg));
  }
});


window.h = history;
window.createHashHistory = createHashHistory;
window.unblock = window.h.block((location, action) => {
  return `你真的要进入${location.pathname}吗？${action}`;
});

