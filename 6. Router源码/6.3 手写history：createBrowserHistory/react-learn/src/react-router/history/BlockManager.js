export class BlockManager {

  prompt = null; // 该属性是否有值，决定了是否有阻塞

  constructor(getUserConfirmation) {
    this.getUserConfirmation = getUserConfirmation;
  }

  /**
   * 设置一个阻塞，传递一个提示消息
   * @param {*} prompt 可以是字符串，也可以一个函数，函数返回一个消息字符串
   */
  block(prompt) {
    if (typeof prompt !== "string" && typeof prompt !== "function") {
      throw new TypeError("prompt must be string or function.");
    }

    this.prompt = prompt;

    return () => {
      this.prompt = null;
    }; // unBlock

    /* if (typeof prompt === "string") {
      this.prompt = prompt;
     } else if (typeof prompt === "function") {
      this.prompt = prompt(location, action); // 错误写法，触发的时候才能运行
     } else {
      throw new TypeError("prompt must be string or function.");
     } */
  }

  /**
   * 触发阻塞
   * @param {object} location
   * @param {string} action
   * @param {function} callback 当阻塞完成之后要做的事情（一般是跳转页面）
   */
  triggerBlock(location, action, callback) {
    if (!this.prompt) {
      callback();
      return;
    }

    let message;  // 阻塞消息
    if (typeof this.prompt === "function") {
      message = this.prompt(location, action);
    } else if (typeof this.prompt === "string") {
      message = this.prompt;
    }
    this.getUserConfirmation(message, (isNext) => {
      if (isNext === true) {
        // 可以跳转了
        callback();
      }
    });
    /* if (this.prompt) {
       let message;
       if (typeof this.prompt === 'function') {
        message = this.prompt()
       } else {
        message = this.prompt
       }
       this.getUserConfirmation(message, (isNext) => {
       if (isNext) {
        callback(true);
       }
       });
     } else {
      callback(true);
     } */
  }
}