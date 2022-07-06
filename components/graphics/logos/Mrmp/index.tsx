import ClassNames from "utils/ClassNames";
import styles from "./styles.module.scss";

const cs = new ClassNames(styles);

const Mrmp = () => {
  return (
    <svg
      className={cs.cx("mrmp")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 255 127"
    >
      <defs>
        <linearGradient
          id="mrmp-linear-gradient"
          x1="2.17"
          y1="111.55"
          x2="255.49"
          y2="111.55"
          gradientTransform="matrix(1, 0, 0, -1, 0, 127)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#9e7b43" />
          <stop offset="0.06" stopColor="#977b51" />
          <stop offset="0.2" stopColor="#827a70" />
          <stop offset="0.33" stopColor="#657992" />
          <stop offset="0.5" stopColor="#658882" />
          <stop offset="0.67" stopColor="#659570" />
          <stop offset="0.81" stopColor="#87936b" />
          <stop offset="0.93" stopColor="#989268" />
          <stop offset="1" stopColor="#9e9167" />
        </linearGradient>
      </defs>

      <path
        className={cs.cx(["mrmp-svg-path", "--path-1"])}
        d="M148.11,16.45A16.45,16.45,0,1,1,131.67,0,16.45,16.45,0,0,1,148.11,16.45Z"
        // fill:url(#mrmp-linear-gradient);
      />
      <path
        className={cs.cx(["mrmp-svg-path", "--path-2"])}
        d="M71.68,17.42A15.12,15.12,0,1,1,56.57,2.3,15.11,15.11,0,0,1,71.68,17.42Z"
        // fill:url(#mrmp-linear-gradient-2);
      />
      <path
        className={cs.cx(["mrmp-svg-path", "--path-3"])}
        d="M220.68,17.42A15.12,15.12,0,1,1,205.57,2.3,15.11,15.11,0,0,1,220.68,17.42Z"
        // fill:url(#mrmp-linear-gradient-3);
      />
      <path
        className={cs.cx(["mrmp-svg-path", "--path-4"])}
        d="M196.27,39.05,172.86,99.79l-20.4-58.74-14.72-2-6,4-6-4-14.69,2L90.65,99.79,67.24,39.05S8.89,32.52,10,59.36c.56,13.51,9.88,17.88,17.2,21.33,0,0-9.31,4.3-15.57,15.68-1.89,3.44-4.59,10.81-6,15.09C2.78,120,0,127.21,0,127.3H22.48s2.15-17.19,7.86-27.12c4.77-8.28,15.2-10.71,16.88-10.7v37.83h20V94.1l12.81,33.21h21.21l8.79-27.21-1,27.21h19.74l2.94-7.32,2.87,7.32h18.85l-1-27.22,9.8,27.22h21.21L196.27,94.1v33.21H217.7V89s37.23,1.16,37.23-25.67C254.94,31.65,196.27,39.05,196.27,39.05ZM47.22,72S26.67,71.32,27.15,58.7c.41-10.46,20.07-7.86,20.07-7.86Zm170.49,5V50.85S237.59,50,237.77,63.7C238,76.33,217.71,77,217.71,77Z"
      />
    </svg>
  );
};

export default Mrmp;
