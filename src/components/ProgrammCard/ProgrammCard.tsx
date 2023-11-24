import React, { FC } from "react";

import styles from "./styles.module.scss";

export type ProgrammCardProps = {
  status?: string;
  category?: string;
  title?: string;
  place?: string;
  datetime?: string;
  background?: string;
};

const ProgrammCard: FC<ProgrammCardProps> = ({
  status,
  category,
  title,
  place,
  datetime,
  background,
}) => (
  <div className={styles.card}>
    <div className={styles.status}>{status}</div>
    <div className={styles.category}>{category}</div>
    <div className={styles.title}>{title}</div>
    <div className={styles.place}>{place}</div>
    <div className={styles.datetime}>{datetime}</div>
  </div>
);

export default ProgrammCard;
