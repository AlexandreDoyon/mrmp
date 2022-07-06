import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";
import { Vr as Svg } from "components/graphics";
interface VrProps {
  bottomColor: string;
  topColor: string;
  backgroundColor?: string;
  orientation?: string;
}

const cs = new ClassNames(styles);

const Vr: React.FC<VrProps> = ({
  bottomColor,
  topColor,
  backgroundColor = "#fff",
  orientation = "",
}: VrProps) => {
  return (
    <>
      <style jsx>{`
        .vr {
          background-color: ${backgroundColor};
        }
      `}</style>
      <div className={`${cs.cx(["vr", orientation])}`}>
        <Svg bottomColor={bottomColor} topColor={topColor} />
      </div>
    </>
  );
};

export default Vr;
