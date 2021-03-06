import { useContext } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { ThemeContext } from "context/ThemeContext";
import Hr from "components/elements/separator/Hr";
import Overlay from "components/elements/Overlay";
import Cta from "components/modules/Cta";
import Hero from "components/modules/Hero";

import { Parallax, Reveal } from "components/Animations"; //components/animations

import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";

import { SetTheme } from "interfaces/themes";

const Home: NextPage = () => {
  const { SetThemeColor, SetThemeMode } = useContext(ThemeContext)! as SetTheme;
  const cs = new ClassNames(styles);

  SetThemeColor("theme-violet");
  SetThemeMode("theme-dark");

  const parallaxWeights = {
    translateY: [0, 0.025, 0.06, 0.08, 0.13, 0.18, 0.245, 0.345, 0.5, 0.7],
    opacity: 0.15,
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={cs.cx(["dev"], "l-flow-x")}>
        <Link href="/tests">
          <a className={cs.cx(["devLink"], "c-button")}>TEST DEVELOPMENT</a>
        </Link>

        <Link href="/tests">
          <a className={cs.cx(["devLink"], "c-button")}>TEST DEVELOPMENT</a>
        </Link>
      </section>

      {/*<Cta>
        <h1>test</h1>
  </Cta>*/}

      <section className={cs.cx(["hero"])}>
        <Hero
          title={<>Gardez Espoir</>}
          text={
            <>
              Quand le soleil se couche, les étoiles apparaissent — Publilius
              Syrus <br />
              Trouvez toutes les ressources pouvant vous aider et vous soutenir
              <br />
              dans votre rétablissement et votre parcourt en santé mentale
            </>
          }
        />

        <Overlay themeColor="theme-turquoise-dark-1" />
      </section>

      <section className={cs.cx(["cta", "theme-turquoise-dark-1"])}>
        <Overlay themeColor="theme-turquoise-dark-1" />

        <div className={cs.cx(["cta__content"])}>
          <div className={cs.cx(["cta__left", "cta__wrapper_txt"])}>
            <Reveal
              delay={[0.6, 0.3, 0.3]}
              from={"left"}
              timing={"ease"}
              modifier={"small"}
            >
              <div className={cs.cx(["cta__title"])}>
                <h3>
                  Bienvenue sur <br />
                  mon rétablissement
                  <br /> mon parcours
                </h3>
              </div>
              <div className={cs.cx(["cta__txt"])}>
                <p>
                  Nous avons pour objectif de venir en aide aux personnes touché
                  par une problématique de santé mentale. Pour se faire, nous
                  offrons des outils et toute l&apos;information pouvant vous
                  aider dans votre parcours et votre rétablissement
                </p>
              </div>

              <div className={cs.cx(["cta__subtitle"])}>
                <p>Voici comment nous pouvons vous aider ↓</p>
              </div>
            </Reveal>
          </div>

          <div className={cs.cx(["cta__separator"])} />

          <div className={cs.cx(["cta__right", "cta__wrapper_img"])}>
            <Reveal
              threshold={0.85}
              start={0.3}
              from={"right"}
              timing={"ease"}
              modifier={"small"}
            >
              <div className={cs.cx(["cta__img"])}>
                <Image
                  src="/images/characters/give_help_01@953x803.png"
                  alt="Picture of the author"
                  layout="responsive"
                  width={1013}
                  height={789}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Hr leftColor="#00354a" rightColor="hsl(190deg, 50%, 30%)" />

      <section style={{ backgroundColor: "#fff", position: "relative" }}>
        <div className={cs.cx(["cta__content"])}>
          <div className={cs.cx(["cta__left", "cta__wrapper_txt"])}>
            <Reveal
              delay={[0.6, 0.3, 0.3]}
              from={"left"}
              timing={"ease"}
              modifier={"small"}
            >
              <div className={cs.cx(["cta__title"])}>
                <h3>
                  Bienvenue sur <br />
                  mon rétablissement
                  <br /> mon parcours
                </h3>
              </div>
              <div className={cs.cx(["cta__txt"])}>
                <p>
                  Nous avons pour objectif de venir en aide aux personnes touché
                  par une problématique de santé mentale. Pour se faire, nous
                  offrons des outils et toute l&apos;information pouvant vous
                  aider dans votre parcours et votre rétablissement
                </p>
              </div>

              <div className={cs.cx(["cta__subtitle"])}>
                <p>Voici comment nous pouvons vous aider ↓</p>
              </div>
            </Reveal>
          </div>

          <div className={cs.cx(["cta__separator"])} />

          <div className={cs.cx(["cta__right", "cta__wrapper_img"])}>
            <Reveal
              start={0.3}
              from={"right"}
              timing={"ease"}
              modifier={"small"}
            >
              <div className={cs.cx(["cta__img"])}>
                <Image
                  src="/images/characters/give_help_01@953x803.png"
                  alt="Picture of the author"
                  layout="responsive"
                  width={1013}
                  height={789}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
