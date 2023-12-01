import React, { useState } from "react";
import cn from "classnames";

import { programsData } from "../../data/data.mock";

import styles from "./styles.module.scss";

const Calendar = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div className={styles.calendar}>
      <div className={styles.activeDays}>
        {programsData.date.activeDays.map(
          ({ dayName, dayNumber, fullDate }, index) => (
            <div
              key={fullDate}
              className={cn(styles.day, {
                [styles.chosen]: index === activeDay,
              })}
              onClick={() => setActiveDay(index)}
            >
              <div className={styles.dayName}>{dayName}</div>
              <div className={styles.dayNumber}>{dayNumber}</div>
            </div>
          )
        )}
      </div>
      <div className={styles.disabledDays}>
        {programsData.date.disabledDays.map(
          ({ dayName, dayNumber, fullDate }) => (
            <div key={fullDate} className={styles.day}>
              <div className={styles.dayName}>{dayName}</div>
              <div className={styles.dayNumber}>{dayNumber}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Calendar;
