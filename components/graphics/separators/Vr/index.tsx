import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";

interface VrProps {
  bottomColor: string;
  topColor: string;
}

const cs = new ClassNames(styles);

const Vr: React.FC<VrProps> = ({ bottomColor, topColor }: VrProps) => {
  return (
    <svg
      className="separator"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 223 1920"
      height="100%"
    >
      <style jsx>
        {`
          .shape {
            fill: url(#shape_1);
          }
          .circleRight,
          .circleLeft {
            opacity: 0.22;
          }
        `}
      </style>

      <linearGradient
        id="shape_1"
        gradientUnits="userSpaceOnUse"
        x1="-848.5"
        y1="-737"
        x2="1071.5"
        y2="-737"
        gradientTransform="matrix(6.123234e-17 -1 1 6.123234e-17 848.5 1071.5)"
      >
        <stop offset="0" stopColor={bottomColor} />
        <stop offset="1" stopColor={topColor} />
      </linearGradient>

      <linearGradient
        id="circle_1"
        gradientUnits="userSpaceOnUse"
        x1="172.5"
        y1="-1185.5"
        x2="172.5"
        y2="-511.5"
        gradientTransform="matrix(6.123234e-17 -1 1 6.123234e-17 848.5 1071.5)"
      >
        <stop offset="0" stopColor="#FFFFFF" stopOpacity="0" />
        <stop offset="1" stopColor="#FFFFFF" />
      </linearGradient>

      <linearGradient
        id="circle_2"
        gradientUnits="userSpaceOnUse"
        x1="-586.5"
        y1="-625.5"
        x2="87.5"
        y2="-625.5"
        gradientTransform="matrix(6.123234e-17 -1 1 6.123234e-17 848.5 1071.5)"
      >
        <stop offset="0" stopColor="#FFFFFF" stopOpacity="0" />
        <stop offset="1" stopColor="#FFFFFF" />
      </linearGradient>

      <path
        className="shape"
        d="M0,1920h205c0,0,18-73.3,18-186c0-290.1-221-525.8-221-842c0-264,97.6-404,97.6-653.3C99.6,115.9,49,0,49,0H0
        V1920z"
      />
      <circle
        className="circleLeft"
        cx="0"
        cy="899"
        r="337"
        fill="url(#circle_1)"
      />
      <circle
        className="circleRight"
        cx="223"
        cy="1321"
        r="337"
        fill="url(#circle_2)"
      />
    </svg>
  );
};

export default Vr;
