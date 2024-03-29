import React, { FC } from "react";

import styles from "./styles.module.scss";

export type HeaderCardProps = {
  img: string;
  label: string;
};

const HeaderCard: FC<HeaderCardProps> = ({ img, label }) => (
  <div className={styles.wrapper}>
    <div
      className={styles.card}
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
      }}
    >
      <div className={styles.shadow}>
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  </div>
);

export default HeaderCard;
