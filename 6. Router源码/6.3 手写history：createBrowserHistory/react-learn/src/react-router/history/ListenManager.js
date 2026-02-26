export class ListenManager {
  listeners = [];

  /**
   *
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

  triggerListener(location, action) {
    for (const listener of this.listeners) {
      listener(location, action);
    }
  }
}