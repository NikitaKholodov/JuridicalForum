import React from "react";

import DateTabs from "./DateTabs/DateTabs";

import styles from "./styles.module.scss";
import { eventCardData } from "../../data/data.mock";
import EventCard from "./EventCard/EventCard";

const Info = () => (
  <div className={styles.wrapper}>
    <div className={styles.head}>
      <div className={styles.title}>
        <span>Мероприятия</span>
        <div>Все</div>
      </div>
      <div className={styles.date}>Март 2023</div>
      <DateTabs />
      <div className={styles.events}>
        {eventCardData.map(({ img, icon, label, id }) => (
          <EventCard img={img} icon={icon} label={label} key={id} />
        ))}
      </div>
      <div className={styles.news}>
        <div className={styles.title}>
          <span>Новости</span>
          <div>Все</div>
        </div>
      </div>
    </div>
  </div>
);

export default Info;
