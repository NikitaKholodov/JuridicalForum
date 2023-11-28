import React, { FC, useState } from "react";


import SliderTabPanel from "../SliderTabPanel/SliderTabPanel";
import ProgrammCard from "./ProgrammCard/ProgrammCard";
import Calendar from "../Calendar/Calendar";
import ProgrammsTabs from "./ProgrammsTabs/ProgrammsTabs";
import SwipeableBottomDrawer from "../SwipeableBottomDrawer/SwipeableBottomDrawer";
import Search from "../Search/Search";
import { ReactComponent as BackArrow } from "../../assets/icons/BackArrow.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/SearchIcon.svg";

import { programmsData } from "../../data/data.mock";

import styles from "./styles.module.scss";



export type ProgrammsPropsType = {
  setIsPageOpen: React.MouseEventHandler<HTMLDivElement>;
}

const Programms: FC<ProgrammsPropsType> = ({setIsPageOpen}) => {
  const [isSearch, setIsSearch] = useState(false)

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <div onClick={setIsPageOpen}><BackArrow /></div>
          <div>Программы</div>
          <div onClick={() => setIsSearch(true)}><SearchIcon /></div>
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
            <div key={item.time}>
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
                    <ProgrammCard key={title}
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
            </div>
          ))}
        </div>
      </div>
      <SwipeableBottomDrawer isPageOpen={isSearch} setIsPageOpen={() => setIsSearch(false)}>
        <Search />
      </SwipeableBottomDrawer>
    </div>
  );
};

export default Programms;
