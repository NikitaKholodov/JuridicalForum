import React, { FC, useState } from "react";
import cn from "classnames";

import { ReactComponent as DropdownArrow } from "../../../../assets/icons/DropdownArrow.svg";

import styles from "./styles.module.scss";
import { DaysData } from "../../CalendarPage";

export type CalendarProps = {
  daysData: DaysData;
};

const Calendar: FC<CalendarProps> = ({ daysData }) => {
  const [isLegendOpen, setIsLegendOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.dropdown}>
        <div className={styles.select}>
          Сентябрь <DropdownArrow />
        </div>
        <div className={styles.select}>
          2023 <DropdownArrow />
        </div>
      </div>
      <div
        className={styles.dates}
        onClick={() => setIsLegendOpen(!isLegendOpen)}
      >
        {daysData.daysName.map((name) => (
          <div className={styles.dayName} key={name}>
            {name}
          </div>
        ))}
        {daysData.dates.map(({ number, day, disabled, events }) => (
          <div
            className={cn(styles.day, {
              [styles.disabled]: disabled,
              [styles.dateYellow]: events[0].type === "Личная встреча",
              [styles.dateGrey]: events[0].type === "Сегодняшний день",
              [styles.dateBlue]:
                events[0].type === "Российское мероприятие Фонда Росконгресс",
              [styles.dateGreen]:
                events[0].type === "Зарубежное мероприятие Фонда Росконгресс",
              [styles.firstDay]: events[0].firstDay,
              [styles.lastDay]: events[0].lastDay,
              [styles.middleDay]: !events[0].firstDay && !events[0].lastDay,
            })}
            key={day}
          >
            <div className={styles.dots}>
              {events.length >= 2 &&
                events.map((_, index) => (
                  <div
                    className={cn(styles.dot, {
                      [styles.dateYellow]:
                        events[index].type === "Личная встреча",
                      [styles.dateGrey]:
                        events[index].type === "Сегодняшний день",
                      [styles.dateBlue]:
                        events[index].type ===
                        "Российское мероприятие Фонда Росконгресс",
                      [styles.dateGreen]:
                        events[index].type ===
                        "Зарубежное мероприятие Фонда Росконгресс",
                    })}
                  ></div>
                ))}
            </div>
            <span>{number}</span>
          </div>
        ))}
      </div>
      {isLegendOpen && (
        <div className={styles.legend}>
          {daysData.legend.map((name) => (
            <div
              key={name}
              className={cn(styles.legendItem, {
                [styles.grey]: name === "Сегодняшний день",
                [styles.yellow]: name === "Личная встреча",
                [styles.blue]:
                  name === "Российское мероприятие Фонда Росконгресс",
                [styles.green]:
                  name === "Зарубежное мероприятие Фонда Росконгресс",
              })}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Calendar;
