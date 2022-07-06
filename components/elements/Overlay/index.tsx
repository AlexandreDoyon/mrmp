import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";
import { Parallax } from "components/Animations";

interface OverlayProps {
  themeColor: string;
}

const Overlay: React.FC<OverlayProps> = ({ themeColor }: OverlayProps) => {
  const cs = new ClassNames(styles);

  return (
    <Parallax weight={0.15} type={"opacity"}>
      <div className={cs.cx(["overlay", themeColor])} />
    </Parallax>
  );
};

export default Overlay;
