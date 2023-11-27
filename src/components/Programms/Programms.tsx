import React, { FC } from "react";


import SliderTabPanel from "../SliderTabPanel/SliderTabPanel";
import ProgrammCard from "./ProgrammCard/ProgrammCard";

import { programmsData } from "../../data/data.mock";

import styles from "./styles.module.scss";
import Calendar from "../Calendar/Calendar";
import ProgrammsTabs from "./ProgrammsTabs/ProgrammsTabs";

const Programms: FC = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <div></div>
          <div>Программы</div>
          <div></div>
        </div>
        <div className={styles.sliderTabs}>
          <SliderTabPanel />
        </div>
        <div className={styles.title}>
          {programmsData.date.currentMonth} {programmsData.date.currentYear}
        </div>
        <div className={styles.calendar}>
          <Calendar />
        </div>
        <div className={styles.tabs}>
          <ProgrammsTabs data = {programmsData.programmsTabs}/>
        </div>
        <div className={styles.programm}>
          {programmsData.programm[0].ivents.map((item) => (
            <>
              <div className={styles.iventTime}>
                {item.time} <span>{item.gtm}</span>
              </div>
              <div className={styles.ivents}>
                {item.card.map(
                  ({
                    status,
                    category,
                    title,
                    place,
                    datetime,
                    background,
                  }) => (
                    <ProgrammCard
                      status={status}
                      category={category}
                      title={title}
                      place={place}
                      datetime={datetime}
                      background={background}
                    />
                  )
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programms;
