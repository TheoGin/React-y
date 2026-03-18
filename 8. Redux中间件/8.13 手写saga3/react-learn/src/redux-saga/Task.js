export default class Task {
  constructor(next, objCallback) {
    this.next = next;
    this.objCallback = objCallback;
    // this.objCallback.finishCallback = function () {
    // 需要用箭头函数，不然会有 this指向问题
    this.objCallback.finishCallback = () => {
      // 结束了
      this.resolve && this.resolve();
    }
  }

  /**
   * 取消当前任务
   */
  cancel() {
    // 调用 next(null, null, true) 间接 iterator.return()
    this.next(null, null, true);
  }

  /** all 指令需要
   * 将当前的task转换为一个promise对象
   */
  toPromise() {
    return new Promise(resolve => {
      // resolve(this); // 错误写法，此时还不能 resolve，要没有 sage 任务阻塞才能完成
      this.resolve = resolve;
    });
  }
}