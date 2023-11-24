import React, { FC } from "react";

import styles from "./styles.module.scss";
import SliderTabPanel from "../SliderTabPanel/SliderTabPanel";
import { programmsData } from "../../data/data.mock";
import ProgrammCard from "../ProgrammCard/ProgrammCard";

const Programms: FC = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <div></div>
          <div>Программы</div>
          <div></div>
        </div>
        <SliderTabPanel />
        <div className={styles.title}>
          {programmsData.date.currentMonth} {programmsData.date.currentYear}
        </div>
        <div className={styles.calendar}></div>
        <div className={styles.tabs}></div>
        <div className={styles.programm}>
          {programmsData.programm[0].ivents.map((item) => (
            <>
              <div className={styles.iventTime}>{item.time}</div>
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
