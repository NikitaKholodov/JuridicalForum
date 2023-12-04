import React, { FC } from "react";
import cn from "classnames";

import { dateTabs } from "../../../data/data.mock";

import styles from "./styles.module.scss";

const DateTabs: FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.daysRow}>
      {dateTabs.map(({ day, number, id }, index) => (
        <div
          className={cn(styles.day, {
            [styles.active]: value === index,
          })}
          key={id}
          onClick={(e) => handleChange(e, index)}
        >
          <span>{day}</span>
          <span>{number}</span>
        </div>
      ))}
    </div>
  );
};

export default DateTabs;
