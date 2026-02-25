import { createBrowserHistory } from "history";

// 6.2.2 createBrowserHistory 创建一个使用浏览器History Api的history对象。传入配置对象：
const history = createBrowserHistory({
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


window.h = history;
window.createBrowserHistory = createBrowserHistory;

// window.h; // {length: 2, action: 'PUSH', location: {…}, createHref: ƒ, push: ƒ,…}
// var h2 = createBrowserHistory(); // undefined
// h2; // {length: 2, action: 'POP', location: {…}, createHref: ƒ, push: ƒ,…}

// 1. action：当前地址栈，最后一次操作的类型
//   1. 如果是通过createXXXHistory函数新创建的history对象，action固定为POP
//   2. 如果调用了history的push方法，action变为PUSH
//   3. 如果调用了history的replace方法，action变为REPLACE
// 2. push：向当前地址栈指针位置，入栈一个地址
// 3. replace：替换指针指向的地址
// 4. go：控制当前地址栈指针偏移，如果是0，地址不变；如果是负数，则后退指定的步数；如果是正数，则前进指定的步数；
// 5. length：当前栈中的地址数量
// 6. goBack：相当于go(-1)
// 7. goForward：相当于go(1)

// 8. location：表达当前地址中的信息
// h.location // {pathname: '/bbb', search: '', hash: '', state: undefined, key: 'lc0nhd'}

// 9. listen：函数，用于监听地址栈指针的变化
//   1. 该函数接收一个函数作为参数，该参数表示地址变化后要做的事情
//     1. 参数函数接收两个参数
//     2. location：记录了新的地址
//     3. action：进入新地址的方式
//       1. POP：指针移动，调用go、goBack、goForward、用户点击浏览器后退按钮
//       2. PUSH：调用history.push
//       3. REPLACE：调用history.replace
//   2. 该函数有一个返回值，返回的是一个函数，用于取消监听
history.listen((location, action) => {
  console.log(location, action);
  history.action = action;
});
// h.push('/d') // undefined
// h // {length: 6, action: 'PUSH', location: {…}, createHref: ƒ, push: ƒ,…}
// var h2 = createBrowserHistory()
// h2 // {length: 6, action: 'POP', location: {…}, createHref: ƒ, push: ƒ, …}

// 10. block：用于设置一个阻塞，当页面发生跳转时，会将指定的消息传递到getUserConfirmation，并调用getUserConfirmation函数
//   1. 该函数接收一个字符串作为参数，表示消息内容，也可以接收一个函数作为参数，函数的返回值是消息内容
//   2. 该函数返回一个取消函数，调用取消函数可以解除阻塞
/* window.unBlock = history.block((location, action) => {
  return `你真的要进入${ location.pathname }吗？${ action }`;
}); */

// 11. createHref：basename+url
// http://localhost:3000/news/dd#aaa
// h.location // {pathname: '/dd', search: '', hash: '#aaa', state: undefined}
// h.createHref(h.location) // '/news/dd#aaa'