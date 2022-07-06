import { useState, MouseEvent, useEffect, useContext, useRef } from "react";
import Link from "next/link";

import MRMP from "components/graphics/logos/Mrmp";
import Hamburger from "components/graphics/icons/Hamburger";
import Login from "components/graphics/icons/Login";

import { ThemeContext } from "context/ThemeContext";
import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";

import { Theme } from "interfaces/themes";
import { Sticky } from "components/Animations";
import Modal from "components/modules/Modal";
import Navigation from "components/sections/Navigation";

type Menu = null | "login" | "nav" | "user";
//type Menu = "login" | "nav" | "user" | "";
type User = false;

const Header = () => {
  const { ThemeColor, ThemeMode } = useContext(ThemeContext)! as Theme;
  const cs = new ClassNames(styles);

  const [menu, setMenu] = useState<Menu>(null);
  const prevMenu = useRef<Menu>(null);

  const handleClick = (event: MouseEvent, action: Menu) => {
    event.preventDefault;
    action !== menu ? setMenu(action) : setMenu(null);
    prevMenu.current = menu;
  };

  let User = false;

  const loginMenu = (
    <button
      className={cs.cx(["button", "button-nav", "button-right"])}
      onClick={(event) => handleClick(event, "login")}
    >
      <Login isActive={menu === "login" ? true : false} />
    </button>
  );

  const userMenu = <button className={cs.cx(["nav"])}>user</button>;

  return (
    <Sticky length={30} stickyClassName={cs.cx(["isStuck"])}>
      <header className={cs.cx(["header", ThemeColor, ThemeMode])}>
        <div className={cs.cx(["background"], "u-transition")} />
        <nav className={cs.cx(["navbar"], "u-transition")}>
          <button
            className={cs.cx(["button", "button-nav", "button-left"])}
            onClick={(event) => handleClick(event, "nav")}
          >
            <Hamburger isActive={menu === "nav" ? true : false} />
          </button>

          <Link href="/">
            <a className={cs.cx(["button", "button-link", "home"])}>
              <MRMP />
              <p className={cs.cx("home__txt")}>
                Mon Rétablissement
                <br />
                Mon Parcourt
                <br />
                En Santé Mentale
                <br />
              </p>
            </a>
          </Link>

          {User ? userMenu : loginMenu}
        </nav>

        <Navigation />
        <Modal
          isActive={menu === "nav" ? true : false}
          wasActive={prevMenu.current === "nav" && menu !== null ? true : false}
        >
          <nav className={cs.cx(["modal", "modal-blue"])}>Test blue</nav>
        </Modal>
        <Modal
          isActive={menu === "login" ? true : false}
          wasActive={
            prevMenu.current === "login" && menu !== null ? true : false
          }
        >
          <nav className={cs.cx(["modal", "modal-red"])}>Test red</nav>
        </Modal>
        <Modal
          isActive={menu === "user" ? true : false}
          wasActive={
            prevMenu.current === "user" && menu !== null ? true : false
          }
        >
          <nav className={cs.cx(["modal", "modal-yellow"])}>Test yellow</nav>
        </Modal>
      </header>
    </Sticky> //className={cs.cx(["button", "button-nav", "button-right"])}
  );
};

export default Header;
