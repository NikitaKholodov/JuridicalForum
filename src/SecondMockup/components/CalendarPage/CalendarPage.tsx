import React from "react";

import styles from "./styles.module.scss";
import SliderTabPanel from "./Tabs/Tabs";
import ScrollableTabPanel from "./Tabs/Tabs";

function CalendarPage() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Календарь событий</span>
      <ScrollableTabPanel />
    </div>
  );
}

export default CalendarPage;
