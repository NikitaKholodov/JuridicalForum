import React from "react";
import cn from "classnames";

import { programmsData } from "../../data/data.mock";

import styles from "./styles.module.scss";

const Calendar = () => (
  <div className={styles.calendar}>
    <div className={styles.activeDays}>
      {programmsData.date.activeDays.map((item) => (
      <div key={item.fullDate} className={cn(styles.day, {
        [styles.chosen]: item.isChosen
      })}>
        <div className={styles.dayName}>{item.dayName}</div>
        <div className={styles.dayNumber}>{item.dayNumber}</div>
      </div>))}
    </div>
    <div className={styles.disabledDays}>
    {programmsData.date.disabledDays.map((item) => (
      <div key={item.fullDate} className={styles.day}>
        <div className={styles.dayName}>{item.dayName}</div>
        <div className={styles.dayNumber}>{item.dayNumber}</div>
      </div>))}
    </div>
  </div>
);

export default Calendar;
