import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";
import { Reveal } from "components/Animations";
import Overlay from "components/elements/Overlay";
import Background from "components/modules/Background";
import Params from "components/modules/Hero/params.json";
import { Image } from "types/images";

interface HeroProps {
  images?: Image | Image[];
  title: React.ReactElement;
  text: React.ReactElement;
}

const landscapeImagesLayers: Image = Params.landscape.layers;
const landscapeImageCover: Image = Params.landscape.cover;

const Hero: React.FC<HeroProps> = ({
  images = [landscapeImagesLayers, landscapeImageCover],
  title,
  text,
}: HeroProps) => {
  const cs = new ClassNames(styles);

  return (
    <section className={cs.cx(["hero"])}>
      <Background images={images} />
      <div className={cs.cx(["container"])}>
        <Reveal threshold={1}>
          <div className={cs.cx(["content"])}>
            <h1 className={cs.cx(["title"])}>{title}</h1>
            <p className={cs.cx(["text"])}>{text}</p>
          </div>
        </Reveal>
      </div>

      <Overlay themeColor="theme-turquoise-dark-1" />
    </section>
  );
};

export default Hero;
