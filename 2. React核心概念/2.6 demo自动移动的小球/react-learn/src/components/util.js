/**
 * 左闭右闭
 * @param min
 * @param max
 * @returns {*}
 */
export function getRandom(min, max) {
  return min + Math.floor(Math.random() * (max + 1 - min))
}