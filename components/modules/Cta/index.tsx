import { useState, MouseEvent, useEffect, useContext, Fragment } from "react";
import Link from "next/link";
import { ThemeContext } from "context/ThemeContext";
import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";
import { Parallax, Reveal } from "components/Animations";
import { Theme } from "interfaces/themes";

interface CtaProps {
  title: JSX.Element | JSX.Element[];
  text?: JSX.Element | JSX.Element[];
  subtitle?: JSX.Element | JSX.Element[];
  button?: JSX.Element | JSX.Element[];
  image?: JSX.Element | JSX.Element[];
  themeColor?: "violet" | "turquoise" | "neutral";
  themeMode?: "dark" | "light";
  overlay?: false | "parallax";
}

const Cta: React.FC<CtaProps> = ({
  title,
  text,
  subtitle,
  button,
  image,
  themeColor = "neutral",
  themeMode = "light",
  overlay = false,
}: CtaProps) => {
  const cs = new ClassNames(styles);

  let Overlay;
  if (overlay === "parallax") {
    Overlay = (
      <Parallax weight={0.15} type={"opacity"}>
        <div className={cs.cx(["cta__overlay"])} />
      </Parallax>
    );
  }

  return <section>{overlay === "parallax" && Overlay}</section>;
};

export default Cta;
