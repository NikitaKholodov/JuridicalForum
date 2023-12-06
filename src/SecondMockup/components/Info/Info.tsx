import React from "react";

import DateTabs from "./DateTabs/DateTabs";
import EventCard from "./EventCard/EventCard";
import News from "./News/News";

import { eventCardData, newsData } from "../../data/data.mock";

import styles from "./styles.module.scss";

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
        <div className={styles.newsRow}>
          {newsData.map(({ label, date, time, img, id }) => (
            <News label={label} date={date} time={time} image={img} key={id} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Info;
