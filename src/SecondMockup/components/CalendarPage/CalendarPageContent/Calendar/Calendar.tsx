import React, { FC, useState } from "react";
import cn from "classnames";

import { ReactComponent as DropdownArrow } from "../../../../assets/icons/DropdownArrow.svg";

import { calendarData } from "../../data.mock";

import styles from "./styles.module.scss";

const Calendar: FC = () => {
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
        {calendarData.daysName.map((name) => (
          <div className={styles.dayName} key={name}>
            {name}
          </div>
        ))}
        {calendarData.dates.map(({ number, day, disabled, events }) => (
          <div
            className={cn(styles.day, {
              [styles.disabled]: disabled,
              [styles.dateYellow]: events.type === "Личная встреча",
              [styles.dateGrey]: events.type === "Сегодняшний день",
              [styles.dateBlue]:
                events.type === "Российское мероприятие Фонда Росконгресс ",
              [styles.dateGreen]:
                events.type === "Зарубежное мероприятие Фонда Росконгресс ",
              [styles.firstDay]: events.firstDay,
              [styles.lastDay]: events.lastDay,
              [styles.middleDay]: !events.firstDay && !events.lastDay,
            })}
            key={day}
          >
            <div>{number}</div>
          </div>
        ))}
      </div>
      {isLegendOpen && (
        <div className={styles.legend}>
          {calendarData.legend.map((name) => (
            <div
              key={name}
              className={cn(styles.legendItem, {
                [styles.grey]: name === "Сегодняшний день",
                [styles.yellow]: name === "Личная встреча",
                [styles.blue]:
                  name === "Российское мероприятие Фонда Росконгресс ",
                [styles.green]:
                  name === "Зарубежное мероприятие Фонда Росконгресс ",
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
