import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";
import { Parallax } from "components/Animations";
import { Image } from "types/images";
import getImageUrl from "utils/Images";

interface BackgroundProps {
  images: Image | Image[];
}

const Background: React.FC<BackgroundProps> = ({ images }: BackgroundProps) => {
  const cs = new ClassNames(styles);

  if (Array.isArray(images) && images[0].parallax) {
    console.log(images[0].parallax);
    return (
      <>
        {images[0].parallax.map((weight: number, index: number) => {
          return (
            <Parallax weight={weight} type={"translateY"} key={index}>
              <div
                className={cs.cx(["background", "background--layer"])}
                style={{
                  backgroundImage: getImageUrl(images[0], index), //  getImagePath(image[index], index),
                  height: images[0].height,
                }}
              />
            </Parallax>
          );
        })}
        <div
          className={cs.cx(["background", "background--cover"])}
          style={{
            backgroundImage: getImageUrl(images[1], images[0].parallax.length),
            height: images[1].height,
          }}
        />
      </>
    );
  } else if (Array.isArray(images)) {
    return (
      <div
        className={cs.cx(["background", "background--image"])}
        style={{
          backgroundImage: getImageUrl(images[0]),
          height: images[0].height,
        }}
      />
    );
  } else {
    return (
      <div
        className={cs.cx(["background", "background--image"])}
        style={{
          backgroundImage: getImageUrl(images),
          height: images.height,
        }}
      />
    );
  }
};

export default Background;
