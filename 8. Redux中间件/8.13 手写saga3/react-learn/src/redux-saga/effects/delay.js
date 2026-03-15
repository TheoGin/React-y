import { call } from "./call";

// 利用 call + Promise + setTimeout 实现
export function delay(duration) {
  return call(function () {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  }, duration);
}