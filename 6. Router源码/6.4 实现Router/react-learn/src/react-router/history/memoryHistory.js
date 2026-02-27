import { createMemoryHistory } from "history";

// 6.2.4 createMemoryHistory 创建一个使用内存中的地址栈的history对象，一般用于没有地址栏的环境。配置对象：
const history = createMemoryHistory({
  initialEntries: ["/", "/abc"], // 表示初始数组内容
  initialIndex: 0, // 默认指针指向的数组下标
});

// console.log('history', history);

window.h = history;
// window.createMemoryHistory = createMemoryHistory;
// h // {length: 2, action: 'POP', location: {…}, index: 0, entries: Array(2),…}
// h.goForward(); // undefined
// h.location // {pathname: '/abc', search: '', hash: '', state: undefined, key: '27i4bz'}
// h.goBack() // undefined
// h.location // {pathname: '/', search: '', hash: '', state: undefined, key: 'xcee31'}

