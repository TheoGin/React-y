/**
 * 得到一个指定长度的随机字符串
 * @param {*} length
 */
export function getRandomStringByLength(length) {
  // return "@@redux/INIT" + Math.random().toString(36).substr(2, length).split("").join(".");
  return Math.random().toString(36).substr(2, length).split("").join(".");
}

export function getInitRandomStringByLength(length) {
  return "@@redux/INIT" + getRandomStringByLength(length);
}

export function getUnknownRandomStringByLength(length) {
  return "@@redux/PROBE_UNKNOWN_ACTION" + getRandomStringByLength(length);
}

