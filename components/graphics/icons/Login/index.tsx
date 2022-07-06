import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";
import React, { useEffect } from "react";
interface LoginProps {
  isActive: boolean;
}

const cs = new ClassNames(styles);

const Login: React.FC<LoginProps> = ({ isActive }: LoginProps) => {
  return (
    <svg
      className={cs.cx(["login", { "is-active": isActive }])}
      viewBox="3.6 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cs.cx(
          ["line", "line--1"],
          "u-transition u-stroke-animation"
        )}
        d="M34,30L11.1,7c-10-10-17,20-4,18c3-1,9-3,12-4c2-1,6-6,6-6"
      />
      <path
        className={cs.cx(
          ["line", "line--2"],
          "u-transition u-stroke-animation"
        )}
        d="M34,0L11.1,23c-10,10-17-20-4-18c3,1,9,3,12,4c2,1,6,6,6,6l0,0h-17"
      />
      <path
        className={cs.cx(
          ["line", "line--3"],
          "u-transition u-stroke-animation"
        )}
        d="M13.06,16V26H29V4H13.06V14"
      />
    </svg>
  );
};

export default Login;
