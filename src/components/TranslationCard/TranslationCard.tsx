import React, { FC } from "react";
import cn from "classnames";

import { ReactComponent as Share } from "../../assets/icons/ShareArrow.svg";

import { translationData } from "../../data/data.mock";

import styles from "./styles.module.scss";

const TranslationCard: FC = () => (
  <div
    className={cn(styles.wrapper)}
    style={{
      background: `url(${translationData.background})`,
      backgroundColor: translationData.backgroundColor,
      backgroundSize: "cover",
    }}
  >
    <div
      className={cn(styles.card, {
        [styles.shadow]: !!translationData.background,
      })}
    >
      <div className={styles.head}>
        <img className={styles.logo} src={translationData.logo} alt="" />
        <div className={styles.button}>
          <Share />
        </div>
      </div>
      <div className={styles.name}>{translationData.name}</div>
      <div className={styles.date}>{translationData.date}</div>
    </div>
  </div>
);

export default TranslationCard;
