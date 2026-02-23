import { useEffect } from "react";
import { resetScroll } from "./resetScroll";

export function useScroll(pathname) {
  /* useEffect(() => {
    resetScroll();
  }, [pathname]); */

  // 简化书写
  useEffect(resetScroll, [pathname]);
}