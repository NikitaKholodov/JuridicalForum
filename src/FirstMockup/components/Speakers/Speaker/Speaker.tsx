import React, { FC } from "react";

import styles from "./styles.module.scss";

export type SpeakerProps = {
  profileImg: string;
  name: string;
  position: string;
};

const Speaker: FC<SpeakerProps> = ({ profileImg, name, position }) => (
  <div className={styles.wrapper}>
    {profileImg ? (
      <img className={styles.avatar} src={profileImg} alt="" />
    ) : (
      <div className={styles.emptyAvatar}></div>
    )}
    <div className={styles.name}>{name}</div>
    <div className={styles.position}>{position}</div>
  </div>
);

export default Speaker;
