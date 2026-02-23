let timerTop, timerLeft;

export function resetScroll() {
  clearInterval(timerTop);
  clearInterval(timerLeft);

  const htmlElement = document.documentElement;
  timerTop = transitionScroll(htmlElement.scrollTop, 0, (dis) => {
    htmlElement.scrollTop = dis;
  });
  timerLeft = transitionScroll(htmlElement.scrollLeft, 0, (dis) => {
    htmlElement.scrollLeft = dis;
  });
  console.log(timerLeft, timerTop);
}

/**
 * 在300毫秒之内，从指定的初始值，变化到结束值
 * @param {*} start
 * @param {*} end
 * @param {*} setScorll
 */
function transitionScroll(start, end, setScorll) {
  const tick = 16; // 每隔16毫秒完成一次变化
  const transitionTime = 300;  //总时间为 300毫秒
  const totalTimes = Math.ceil(transitionTime / tick);  // 变化的次数
  const perMoveDistance = (end - start) / totalTimes;  // 总距离/次数，每次运动的距离
  let currentTimes = 0;

  const timer = setInterval(() => {
    currentTimes++;
    start += perMoveDistance;
    if (currentTimes === totalTimes) {
      start = end;
      clearInterval(timer);
    }
    setScorll(start);
  }, tick);

  return timer;
}