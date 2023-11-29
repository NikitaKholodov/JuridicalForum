import React, { FC, useState } from "react";
import cn from "classnames";

import { ReactComponent as Live } from "../../../assets/icons/live.svg";
import BottomDrawer from "../../BottomDrawer/BottomDrawer";
import ProgrammInfo from "../ProgrammInfo/ProgrammInfo";

import styles from "./styles.module.scss";

export type ProgrammCardProps = {
  status?: string;
  category?: string;
  title?: string;
  place?: string;
  datetime?: string;
  background?: string;
  fullWidth?: boolean;
};

const ProgrammCard: FC<ProgrammCardProps> = ({
  status,
  category,
  title,
  place,
  datetime,
  background,
  fullWidth,
}) => {
  const [isProgrammInfoOpen, setIsProgrammInfoOpen] = useState(false);

  return (
    <div
      className={cn(styles.wrapper, {
        [styles.fullWidth]: fullWidth,
      })}
      style={{
        background: `url(${background})`,
        backgroundSize: "cover",
      }}
      onClick={() => setIsProgrammInfoOpen(true)}
    >
      <div
        className={cn(styles.card, {
          [styles.shadow]: !!background,
        })}
      >
        <div className={styles.status}>
          <span>{status}</span> <Live />
        </div>
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
      <BottomDrawer
        isPageOpen={isProgrammInfoOpen}
        setIsPageOpen={setIsProgrammInfoOpen}
      >
        <ProgrammInfo
          key={title}
          status={status}
          category={category}
          title={title}
          place={place}
          datetime={datetime}
          background={background}
          setIsPageOpen={() => setIsProgrammInfoOpen(false)}
        />
      </BottomDrawer>
    </div>
  );
};

export default ProgrammCard;
