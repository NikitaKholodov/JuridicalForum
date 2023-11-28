import React, { FC } from "react";
import cn from "classnames";

import { ReactComponent as Live } from "../../../assets/icons/live.svg";

import styles from "./styles.module.scss";

export type ProgrammCardProps = {
  status?: string;
  category?: string;
  title?: string;
  place?: string;
  datetime?: string;
  background?: string;
  fullWidth?: boolean
};


const ProgrammCard: FC<ProgrammCardProps> = ({
  status,
  category,
  title,
  place,
  datetime,
  background,
  fullWidth
}) => (
  <div className={cn(styles.wrapper, {
    [styles.fullWidth]: fullWidth
  })} style={{
    background: `url(${background})`,
    backgroundSize: "cover",
    
  }}>
    <div
      className={cn(styles.card, {
        [styles.shadow]: !!background,
      })}
      
    >
      <div className={styles.status}><span>{status}</span> <Live /></div>
      <div className={styles.category}>{category}</div>
      <div
        className={cn(styles.title, {
          [styles.whiteText]: !!background,
        })}
      >
        {title}
      </div>
      <div className={cn(styles.place, { [styles.whiteText]: !!background })}>
        {place}
      </div>
      <div
        className={cn(styles.datetime, { [styles.whiteText]: !!background })}
      >
        {datetime}
      </div>
    </div>
  </div>
);

export default ProgrammCard;
