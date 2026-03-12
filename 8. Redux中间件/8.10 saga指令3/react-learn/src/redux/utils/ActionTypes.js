/**
 * 得到一个指定长度的随机字符串
 * @param {*} length
 */
export function getRandomStringByLength(length) {
  // return "@@redux/INIT" + Math.random().toString(36).substr(2, length).split("").join(".");
  return Math.random().toString(36).substr(2, length).split("").join(".");
}

export function getInitRandomString() {
  return "@@redux/INIT" + getRandomStringByLength(6);
}

export function getUnknownRandomString() {
  return "@@redux/PROBE_UNKNOWN_ACTION" + getRandomStringByLength(6);
}

