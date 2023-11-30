import React, { FC, useState } from "react";
import cn from "classnames";

import { ReactComponent as Live } from "../../../assets/icons/live.svg";
import BottomDrawer from "../../BottomDrawer/BottomDrawer";
import ProgramInfo from "../ProgramInfo/ProgramInfo";

import styles from "./styles.module.scss";

export type ProgramCardProps = {
  status?: string;
  category?: string;
  title?: string;
  place?: string;
  datetime?: string;
  background?: string;
  fullWidth?: boolean;
};

const ProgramCard: FC<ProgramCardProps> = ({
  status,
  category,
  title,
  place,
  datetime,
  background,
  fullWidth,
}) => {
  const [isProgramInfoOpen, setIsProgramInfoOpen] = useState(false);

  return (
    <div
      className={cn(styles.wrapper, {
        [styles.fullWidth]: fullWidth,
      })}
      style={{
        background: `url(${background})`,
        backgroundSize: "cover",
      }}
      onClick={() => setIsProgramInfoOpen(true)}
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
        isPageOpen={isProgramInfoOpen}
        setIsPageOpen={setIsProgramInfoOpen}
        swipeable={false}
      >
        <ProgramInfo
          key={title}
          status={status}
          category={category}
          title={title}
          place={place}
          datetime={datetime}
          background={background}
          setIsPageOpen={setIsProgramInfoOpen}
        />
      </BottomDrawer>
    </div>
  );
};

export default ProgramCard;
