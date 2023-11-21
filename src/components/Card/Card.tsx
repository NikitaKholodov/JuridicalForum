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
    <img className={styles.icon} src={icon} alt={name}></img>
    <div>{name}</div>
  </div>
);

export default Card;
