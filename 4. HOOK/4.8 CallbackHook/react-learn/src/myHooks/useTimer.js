/* eslint 'react-hooks/exhaustive-deps': 'off' */
// 使用Hook的时候，如果没有严格按照Hook的规则进行，eslint的一个插件（eslint-plugin-react-hooks）会报出警告，加上上面控制台就不会有警告
// React Hook useEffect has missing dependencies: 'duration' and 'func'. Either include them or remove the dependency array  react-hooks/exhaustive-deps
import { useEffect } from "react";

/**
 * 组件首次渲染后，启动一个Interval计时器
 * 组件卸载后，清除该计时器
 * @param func
 * @param duration
 * @returns void
 */
export default function useTimer(func, duration) {
  useEffect(() => {
    const timer = setInterval(func, duration);

    return () => {
      clearInterval(timer);
    };
  }, []); // []会产生警告，因为 func, duration 可能会发生变化，但此hook明确不会改变，所以可以通过eslint注释去掉
}