import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Michelle</h1>
        <p className={styles.description}>
        Enthusiastic Computer Science Master’s student with experience in full-stack development. Eager to leverage my skills and academic knowledge in a challenging environment, contributing to innovative projects and gaining deeper insights into large-scale system design. 
        </p>
        <a href="mailto:masanakhanyi@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/me.png")}
        alt="Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
