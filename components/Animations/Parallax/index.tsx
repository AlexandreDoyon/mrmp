import React, { useEffect, useRef, useState, useCallback } from "react";

interface ParallaxProps {
  children: React.ReactElement;
  weight: number;
  type: "translateY" | "opacity";
}

const Parallax: React.FC<ParallaxProps> = ({
  children,
  weight,
  type = "translateY",
}: ParallaxProps) => {
  const [animationRunning, setAnimationRunning] = useState(false);
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const jsxElementWithRef = React.Children.only(
    React.cloneElement(children, { ...children.props, ref: ref })
  );

  const animationLoop = useCallback(() => {
    let difference = window.scrollY;
    difference *= weight;

    if (ref && ref.current) {
      const styling = ref.current.style;
      switch (type) {
        case "translateY":
          styling.transform = `translate3d(0px, ${-difference}px, 0px)`;
          break;
        case "opacity":
          if (difference / 100 < 1) {
            styling.opacity = `${difference / 100}`;
          } else if (difference / 100 > 1) {
            styling.opacity = "0.999";
          }
          break;
      }
    }
    requestAnimationFrame(animationLoop);
  }, [type, weight]);

  const animateScroll = useCallback(() => {
    if (!animationRunning) {
      setAnimationRunning(false);
      requestAnimationFrame(animationLoop);
      document.removeEventListener("scroll", animateScroll);
    }
  }, [animationLoop, animationRunning]);

  useEffect(() => {
    setAnimationRunning(false);
    document.addEventListener("scroll", animateScroll);
  }, [animateScroll]);

  return <>{jsxElementWithRef}</>;
};

export default Parallax;
