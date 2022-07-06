import React, { Fragment } from "react";
import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";

interface RevealProps {
  children: JSX.Element | JSX.Element[];
  start?: number;
  delay?: number | number[];
  duration?: number;
  timing?: string;
  remove?: boolean;
  type?: "fade" | "flip" | "rotate" | "zoom" | "bounce" | "error" | "list";
  from?: "bottom" | "top" | "left" | "right" | "center";
  modifier?: "small" | null;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[] | undefined;
}

const Reveal: React.FC<RevealProps> = ({
  children = <Fragment></Fragment>,
  start = 0,
  delay = 0.2,
  duration = 1,
  timing = "cubic-bezier(0.645, 0.045, 0.355, 1.3)",
  remove = false,
  type = "fade",
  from = "bottom",
  modifier = null,
  root = null,
  rootMargin = "0px",
  threshold = 1,
}: RevealProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const cs = new ClassNames(styles);
  const childrenCount = React.Children.count(children);
  const transitionsDelays: number[] = [start];

  let actualDelay = start;
  let i = 0;

  if (typeof delay === "number") {
    while (i < childrenCount) {
      actualDelay = actualDelay + delay;
      transitionsDelays.push(actualDelay);
      i++;
    }
  } else if (typeof delay === "object") {
    while (i < childrenCount) {
      actualDelay = actualDelay + delay[i];
      transitionsDelays.push(actualDelay);
      i++;
    }
  }

  const domRef = React.useRef<any>();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (remove && entry.isIntersecting) {
          observer.unobserve(domRef.current);
        }
      },
      {
        root: root,
        rootMargin: rootMargin,
        threshold: threshold,
      }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }
  }, [root, rootMargin, threshold, domRef, remove]);

  const childrenWithExtraProp = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      className: `${child.props.className} ${cs.cx([
        "reveal__item",
        type + "-from-" + from,
        modifier ? "reveal--" + modifier : "",
      ])}`,
      style: {
        transitionDelay: transitionsDelays[index] + "s",
        transitionDuration: duration + "s",
        transitionTimingFunction: timing,
      },
    });
  });

  //.reveal__container .is-visible .reveal__item .type"-from-"from

  return (
    <>
      <div
        className={cs.cx([
          "reveal__container",
          isVisible ? "is-visible" : "",
          type + "-from-" + from,
        ])}
        ref={domRef}
      >
        {childrenWithExtraProp}
      </div>
    </>
  );
};

export default Reveal;
