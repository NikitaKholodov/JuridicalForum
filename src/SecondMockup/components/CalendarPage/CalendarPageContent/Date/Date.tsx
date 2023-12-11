import React, { FC } from "react";

import styles from "./styles.module.scss";

export type DateProps = {
  date: {
    gtm: string;
    firstNumber: string;
    secondNumber: string;
    month: string;
  };
};

const Date: FC<DateProps> = ({ date }) => (
  <div className={styles.wrapper}>
    <div className={styles.gtm}>{date.gtm}</div>
    <div className={styles.numbers}>
      <div className={styles.firstNumber}>{date.firstNumber}</div>
      {date.secondNumber && <div>-</div>}
      <div className={styles.secondNumber}>{date.secondNumber}</div>
    </div>
    <div className={styles.month}>{date.month}</div>
  </div>
);

export default Date;
