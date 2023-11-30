import React, { FC } from "react";

import Speaker from "./Speaker/Speaker";

import { speakersData } from "../../data/data.mock";

import styles from "./styles.module.scss";

const Speakers: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.head}>
      <div className={styles.title}>Спикеры</div>
      <div className={styles.button}>Все</div>
    </div>
    <div className={styles.speakers}>
      {speakersData.map(({ name, profileImg, position }) => (
        <Speaker
          key={name}
          name={name}
          profileImg={profileImg}
          position={position}
        />
      ))}
    </div>
  </div>
);

export default Speakers;
