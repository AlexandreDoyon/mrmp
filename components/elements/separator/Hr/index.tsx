import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";
import { Hr as Svg } from "components/graphics";
interface HrProps {
  leftColor: string;
  rightColor: string;
  backgroundColor?: string;
}

const cs = new ClassNames(styles);

const Hr: React.FC<HrProps> = ({
  leftColor,
  rightColor,
  backgroundColor = "#fff",
}: HrProps) => {
  return (
    <>
      <style jsx>{`
        .hr {
          background-color: ${backgroundColor};
        }
      `}</style>
      <div className={`hr ${cs.cx(["hr"])}`}>
        <Svg leftColor={leftColor} rightColor={rightColor} />
      </div>
    </>
  );
};

export default Hr;
