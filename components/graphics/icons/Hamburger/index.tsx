import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";

interface HamburgerProps {
  isActive: boolean;
}

const cs = new ClassNames(styles);

const Hamburger: React.FC<HamburgerProps> = ({ isActive }: HamburgerProps) => {
  return (
    <svg
      className={cs.cx(["hamburger", { "is-active": isActive }])}
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cs.cx(
          ["line", "line--1"],
          "u-transition u-stroke-animation"
        )}
        d="M.0,5H26.93c13,0,6,28-4,18L0,0"
      />

      <path
        className={cs.cx(
          ["line", "line--2"],
          "u-transition u-stroke-animation"
        )}
        d="M.0,25H26.93c13,0,6-28-4-18L0,30"
      />
      <path
        className={cs.cx(
          ["line", "line--3"],
          "u-transition u-stroke-animation"
        )}
        d="M0 15 L 34 15"
      />
    </svg>
  );
};

export default Hamburger;
