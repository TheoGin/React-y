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

function transitionScroll(start, end, setScorll) {
  const tick = 16;
  const transitionTime = 300;
  const totalTimes = Math.ceil(transitionTime / tick);
  const perMoveDistance = (end - start) / totalTimes;
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