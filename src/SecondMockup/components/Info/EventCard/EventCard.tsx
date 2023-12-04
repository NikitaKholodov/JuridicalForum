import React, { FC } from "react";

import styles from "./styles.module.scss";

export type EventCardProps = {
  img: string;
  label: string;
  icon: string;
};

const EventCard: FC<EventCardProps> = ({ img, label, icon }) => (
  <div
    className={styles.wrapper}
    style={{
      background: `url(${img})`,
      backgroundSize: "cover",
    }}
  >
    <div className={styles.card}>
      <img className={styles.icon} src={icon} alt="icon" />
      <div className={styles.label}>{label}</div>
    </div>
  </div>
);

export default EventCard;
