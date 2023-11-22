import React, { FC } from "react";

import styles from "./styles.module.scss";

export type CardProps = {
  color: string;
  name: string;
  icon: string;
};

const Card: FC<CardProps> = ({ color, name, icon }) => (
  <div
    className={styles.card}
    style={{
      background: `linear-gradient(${color})`,
    }}
  >
    <div className={styles.icon}>
      <img src={icon} alt={name}></img>
    </div>
    <div>{name}</div>
  </div>
);

export default Card;
