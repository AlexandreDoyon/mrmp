import { useState, useEffect } from "react";

const useScrollY = (ratio?: number) => {
  /**
   *
   * Return scrollY multiply by a raio variable
   *
   * @param {number} ratio
   * @returns {number}
   *
   * @example  const ScrollY = useScrollY(0.025);
   *    @return  ScrollY = 0;      =>  "when scrollY on top" (0.025 * 0)
   *    @return  ScrollY = 6.375;  =>  "when scrollY down to 255" (0.025 * 255)
   *
   * @import import useScrollY from "hooks/useScrollY";
   *
   */

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ratio ? ratio * scrollY : 1;
};

export default useScrollY;
