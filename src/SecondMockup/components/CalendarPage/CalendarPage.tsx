import React from "react";

import ScrollableTabPanel from "./Tabs/Tabs";
import CalendarPageContent from "./CalendarPageContent/CalendarPageContent";

import styles from "./styles.module.scss";

function CalendarPage() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Календарь событий</span>
      <ScrollableTabPanel />
      <CalendarPageContent />
    </div>
  );
}

export default CalendarPage;
