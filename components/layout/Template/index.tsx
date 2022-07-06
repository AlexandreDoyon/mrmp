import { Fragment } from "react";

import Header from "components/layout/Header";
import Footer from "components/layout/Footer";

import ClassNames from "utils/ClassNames";
import styles from "./styles.module.scss";

interface TemplateProps {
  children: React.ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }: TemplateProps) => {
  const cs = new ClassNames(styles);

  return (
    <Fragment>
      <Header />
      <main className={cs.cx(["main"])}>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Template;
