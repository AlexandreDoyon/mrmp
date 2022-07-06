import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";
import { useState, useRef, useReducer } from "react";
import { Reveal } from "components/Animations";
import Overlay from "components/elements/Overlay";
import Background from "components/modules/Background";
import Vr from "components/elements/separator/Vr";
import Params from "components/modules/Hero/params.json";
import { Image } from "types/images";
import Link from "next/link";
interface ModalProps {}

const Modal: React.FC<ModalProps> = ({}: ModalProps) => {
  const cs = new ClassNames(styles);

  const [section, setSection] = useState(0);

  const hoverHandler = (section: number) => {
    setSection(section);
  };

  const outHandler = (section: number) => {
    setSection(section);
  };

  return (
    <nav className={cs.cx(["navigation"])}>
      <div className={cs.cx(["menu"])}>
        <h2 className={cs.cx(["title"])}>Nos principales sections</h2>
        <ul className={cs.cx(["list"])}>
          <li className={cs.cx(["item", "item-1"])}>
            <Link href="/">
              <a
                className={cs.cx(["link", "txt-turquoise"])}
                onMouseEnter={() => hoverHandler(1)}
                onMouseLeave={() => outHandler(1)}
              >
                Trouver des ressources en fonction de vos difficultés
              </a>
            </Link>
          </li>
          <li
            className={cs.cx(
              ["item", "item-2", "txt-beige"],
              "t-light t-turquoise"
            )}
          >
            <Link href="/">
              <a
                className={cs.cx(["link"], "t-txt")}
                onMouseEnter={() => hoverHandler(2)}
                onMouseLeave={() => outHandler(2)}
              >
                Découvrez des témoignages encourageants
              </a>
            </Link>
          </li>
          <li className={cs.cx(["item", "item-3", "txt-violet"])}>
            <Link href="/">
              <a
                className={cs.cx(["link"], "t-text")}
                onMouseEnter={() => hoverHandler(3)}
                onMouseLeave={() => outHandler(3)}
              >
                Notre répertoire d'organisme
              </a>
            </Link>
          </li>

          <li className={cs.cx(["item", "item-4", "txt-blue"])}>
            <Link href="/">
              <a
                className={cs.cx(["link"])}
                onMouseEnter={() => hoverHandler(4)}
                onMouseLeave={() => outHandler(4)}
              >
                Notre forum de discussion
              </a>
            </Link>
          </li>

          <li className={cs.cx(["item", "item-4", "txt-green"])}>
            <Link href="/">
              <a
                className={cs.cx(["link"])}
                onMouseEnter={() => hoverHandler(4)}
                onMouseLeave={() => outHandler(4)}
              >
                Notre boite à outils
              </a>
            </Link>
          </li>

          <li className={cs.cx(["item", "item-4", "txt-red"])}>
            <Link href="/">
              <a
                className={cs.cx(["link"])}
                onMouseEnter={() => hoverHandler(4)}
                onMouseLeave={() => outHandler(4)}
              >
                Encore plus ...
              </a>
            </Link>
          </li>
        </ul>
      </div>

      <Vr
        bottomColor="#00354a"
        topColor="hsl(190deg, 50%, 30%)"
        orientation="right-1"
      />

      <div className={cs.cx(["information"])}>
        <div className={cs.cx(["general"])}>Some test</div>
        <div className={cs.cx(["details", "details-1"])}>Some test</div>
        <div className={cs.cx(["details", "details-2"])}>Some test</div>
        <div className={cs.cx(["details", "details-3"])}>Some test</div>
        <div className={cs.cx(["details", "details-4"])}>Some test</div>
      </div>
    </nav>
  );
};

export default Modal;
