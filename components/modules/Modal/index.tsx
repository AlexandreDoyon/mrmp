import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";
import { Reveal } from "components/Animations";
import Overlay from "components/elements/Overlay";
import Background from "components/modules/Background";
import Params from "components/modules/Hero/params.json";
import { Image } from "types/images";

interface ModalProps {
  isActive: boolean;
  wasActive: boolean;
  children: React.ReactElement;
}

const landscapeImagesLayers: Image = Params.landscape.layers;
const landscapeImageCover: Image = Params.landscape.cover;

const Modal: React.FC<ModalProps> = ({
  isActive,
  wasActive,
  children,
}: ModalProps) => {
  const cs = new ClassNames(styles);
  if (wasActive) {
    //alert("was");
  }

  return (
    <section
      className={cs.cx([
        "modal",
        isActive && "isActive",
        wasActive && "wasActive",
      ])}
    >
      {children}
    </section>
  );
};

export default Modal;
