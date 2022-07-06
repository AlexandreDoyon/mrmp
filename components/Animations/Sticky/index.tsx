import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";

interface StickyProps {
  children: JSX.Element | JSX.Element[];
  length: number;
  stickyClassName: string;
}

const Sticky: React.FC<StickyProps> = ({
  children,
  length,
  stickyClassName,
}: StickyProps) => {
  const cs = new ClassNames(styles);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  });

  const handleScroll = () => {
    window.pageYOffset > length ? !nav && setNav(true) : nav && setNav(false);
  };

  return (
    <>
      <div className={`${cs.cx(["sticky"])} top`}>
        <div className={`${nav ? stickyClassName : ""}`}>{children}</div>
      </div>
    </>
  );
};

export default Sticky;
