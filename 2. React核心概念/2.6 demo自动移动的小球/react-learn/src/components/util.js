/**
 * 左闭右开
 * @param min
 * @param max
 * @returns {*}
 */
export function getRandom(min, max) {
  return min + Math.floor(Math.random() * (max - min))
}