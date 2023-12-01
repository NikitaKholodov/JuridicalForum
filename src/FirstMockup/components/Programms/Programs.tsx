import React, { FC, useState } from "react";

import SliderTabPanel from "../SliderTabPanel/SliderTabPanel";
import ProgramCard from "./ProgramCard/ProgramCard";
import Calendar from "../Calendar/Calendar";
import ProgramsTabs from "./ProgramsTabs/ProgramsTabs";
import BottomDrawer from "../BottomDrawer/BottomDrawer";
import Search from "../Search/Search";
import { ReactComponent as BackArrow } from "../../assets/icons/BackArrow.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/SearchIcon.svg";

import { programsData } from "../../data/data.mock";

import styles from "./styles.module.scss";

export type ProgramsPropsType = {
  setIsPageOpen: React.MouseEventHandler<HTMLDivElement>;
};

const Programs: FC<ProgramsPropsType> = ({ setIsPageOpen }) => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <div onClick={setIsPageOpen}>
            <BackArrow />
          </div>
          <div>Программы</div>
          <div onClick={() => setIsSearch(true)}>
            <SearchIcon />
          </div>
        </div>
        <div className={styles.sliderTabs}>
          <SliderTabPanel />
        </div>
        <div className={styles.title}>
          {programsData.date.currentMonth} {programsData.date.currentYear}
        </div>
        <div className={styles.calendar}>
          <Calendar />
        </div>
        <div className={styles.tabs}>
          <ProgramsTabs data={programsData.programsTabs} />
        </div>
        <div className={styles.programm}>
          {programsData.program[0].ivents.map((item) => (
            <div key={item.time}>
              <div className={styles.iventTime}>
                <div>{item.time}</div> <span>{item.gtm}</span>
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
                    id,
                  }) => (
                    <ProgramCard
                      key={id}
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
      <BottomDrawer isPageOpen={isSearch} setIsPageOpen={setIsSearch} swipeable>
        <Search />
      </BottomDrawer>
    </>
  );
};

export default Programs;
