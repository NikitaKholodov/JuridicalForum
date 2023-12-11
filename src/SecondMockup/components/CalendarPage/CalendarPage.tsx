import React, { useState } from "react";

import ScrollableTabPanel from "./Tabs/Tabs";
import CalendarPageContent from "./CalendarPageContent/CalendarPageContent";

import styles from "./styles.module.scss";
import { allCalendarData, calendarEventsData } from "./data.mock";

export type CardsData = Array<{
  id: number;
  date: {
    gtm: string;
    firstNumber: string;
    secondNumber: string;
    month: string;
    id: number;
  };
  card: {
    type: string;
    title: string;
    subtitle: string;
    isMember: boolean;
    isForum: boolean;
    start: string;
    location: string;
    telNumber: string;
    site: string;
    user: {
      name: string;
      avatar: string;
    };
  };
}>;
export type DaysData = {
  dates: (
    | {
        number: number;
        day: string;
        events: {
          type: null;
          firstDay: boolean;
          lastDay: boolean;
        };
        disabled: boolean;
      }
    | {
        number: number;
        day: string;
        events: {
          type: string;
          firstDay: boolean;
          lastDay: boolean;
        };
        disabled: boolean;
      }
  )[];
  daysName: string[];
  legend: string[];
};

function CalendarPage() {
  const [cardsData, setCardsData] = useState(calendarEventsData);
  const [daysData, setDaysData] = useState(allCalendarData);

  const handleSetData = (daysData: DaysData, cardsData: CardsData) => {
    setDaysData(daysData);
    setCardsData(cardsData);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Календарь событий</span>
      <ScrollableTabPanel handleSetData={handleSetData} />
      <CalendarPageContent cardsData={cardsData} daysData={daysData} />
    </div>
  );
}

export default CalendarPage;
