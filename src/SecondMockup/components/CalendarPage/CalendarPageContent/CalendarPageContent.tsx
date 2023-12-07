import React from "react";
import cn from "classnames";

import Date from "./Date/Date";
import EventInfoCard from "./EventInfoCard/EventInfoCard";

import { calendarEventsData } from "../data.mock";

import styles from "./styles.module.scss";

function CalendarPageContent() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Все события в этом месяце</span>
      <div className={styles.info}>
        {calendarEventsData.map(({ date, card }, index) => (
          <div className={styles.section}>
            <div className={styles.dates}>
              <Date key={date.id} date={date} />
            </div>
            <div
              className={cn(styles.line, {
                [styles.dot]: index === calendarEventsData.length - 1,
              })}
            ></div>
            <div className={styles.cards}>
              <EventInfoCard card={card} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarPageContent;
