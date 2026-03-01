export class ListenManager {
  // 存放监听器的数组
  listeners = [];

  /**
   * 添加一个监听器，返回一个用于取消监听的函数
   * @param listener
   * @returns {(function())|*} 取消监听
   */
  addListener(listener) {

    this.listeners.push(listener);

    return () => {
      const index = this.listeners.indexOf(listener);
      this.listeners.splice(index, 1);
    }; // unListen
  }

  /**
   * 触发所有的监听器
   * @param {*} location
   * @param {*} action
   */
  triggerListener(location, action) {
    for (const listener of this.listeners) {
      listener(location, action);
    }
  }
}