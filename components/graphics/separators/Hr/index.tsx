import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";

interface HrProps {
  leftColor: string;
  rightColor: string;
}

const cs = new ClassNames(styles);

const Hr: React.FC<HrProps> = ({ leftColor, rightColor }: HrProps) => {
  return (
    <svg
      className="separator"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1920 223"
      width="100%"
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
        x1="0"
        y1="111.5"
        x2="1920"
        y2="111.5"
      >
        <stop offset="0" stopColor={leftColor} />
        <stop offset="1" stopColor={rightColor} />
      </linearGradient>

      <linearGradient
        id="circle_1"
        gradientUnits="userSpaceOnUse"
        x1="1021"
        y1="-337"
        x2="1021"
        y2="337"
      >
        <stop offset="0" stopColor="#FFFFFF" stopOpacity="0" />
        <stop offset="1" stopColor="#FFFFFF" />
      </linearGradient>

      <linearGradient
        id="circle_2"
        gradientUnits="userSpaceOnUse"
        x1="262"
        y1="223"
        x2="936"
        y2="223"
      >
        <stop offset="0" stopColor="#FFFFFF" stopOpacity="0" />
        <stop offset="1" stopColor="#FFFFFF" />
      </linearGradient>

      <path
        className="shape"
        d="M0,0v205c0,0,73.3,18,186,18C476.1,223,711.8,2,1028,2c264,0,404,97.6,653.3,97.6C1804.1,99.6,1920,49,1920,49
		V0H0z"
      />
      <circle
        className="circleLeft"
        cx="1021"
        cy="0"
        r="337"
        fill="url(#circle_1)"
      />
      <circle
        className="circleRight"
        cx="599"
        cy="223"
        r="337"
        fill="url(#circle_2)"
      />
    </svg>

    /*   <style>.cls-1,.cls-2,.cls-3{fill:#2c0967;}.cls-1{opacity:0.4;}.cls-2{opacity:0.5;}.cls-4{fill:#bfb8ff;}</style>
    <svg
      className="separator"
      version="1.1"
      id="Calque_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 320"
    >
      <style jsx>
        {`
          .separator__layer--1 {
            opacity: 0.4;
          }
          .separator__layer--2 {
            opacity: 0.5;
          }
        `}
      </style>
      <path
        className="separator__layer separator__layer--1"
        d="M1920,241.31s-90.48-56.78-272.5-64.74c-176-7.71-525,44.74-688,90.64C859.09,295.49,668.13,320,375.5,320,134.48,320,0,298.09,0,298.09V0H1920Z"
        fill="url(#separatorGradient)"
      />
      <path
        className="separator__layer separator__layer--2"
        d="M1920,151.66s-90.48-56.77-272.5-64.74c-176-7.71-525,71.63-688,117.54C859.09,232.74,668.13,320,375.5,320,134.48,320,0,294.1,0,294.1V0H1920Z"
        fill="url(#separatorGradient)"
      />
      <linearGradient id="separatorGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={color} />
        <stop offset="100%" stopColor={color2} />
      </linearGradient>
      <path
        className="separator__layer separator__layer--3"
        d="M1920,125.77s-90.39-66-272.5-71.72c-230.15-7.17-525,104.5-688,150.41-100.41,28.28-211.37,67.73-504,67.73-241,0-455.5-51.8-455.5-51.8V0H1920Z"
        fill="url(#separatorGradient)"
      />
    </svg>
    */
  );
};

export default Hr;
