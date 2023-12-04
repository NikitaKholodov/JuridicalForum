import React, { FC } from "react";

import styles from "./styles.module.scss";

export type NewsProps = {
  date: string;
  time: string;
  label: string;
  image: string;
};

const News: FC<NewsProps> = ({ date, time, label, image }) => (
  <div className={styles.wrapper}>
    <div className={styles.info}>
      <div className={styles.label}>{label}</div>
      <div className={styles.datetime}>
        {date} • {time}
      </div>
    </div>
    <img className={styles.image} src={image} alt="" />
  </div>
);

export default News;
