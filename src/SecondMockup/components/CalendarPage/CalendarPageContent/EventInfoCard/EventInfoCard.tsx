import React, { FC } from "react";
import cn from "classnames";

import { ReactComponent as LogoCalendar } from "../../../../assets/icons/LogoCalendar.svg";
import { ReactComponent as Location } from "../../../../assets/icons/Location.svg";
import { ReactComponent as Site } from "../../../../assets/icons/Site.svg";
import { ReactComponent as Phone } from "../../../../assets/icons/Phone.svg";
import { ReactComponent as DotMenu } from "../../../../assets/icons/DotMenu.svg";

import styles from "./styles.module.scss";

export type EventInfoCardProps = {
  card: {
    type: string;
    title: string;
    subtitle: string;
    isMember: boolean;
    start: string;
    location: string;
    telNumber: string;
    site: string;
    user: {
      name: string;
      avatar: string;
    };
  };
};

const EventInfoCard: FC<EventInfoCardProps> = ({ card }) => (
  <div className={styles.wrapper}>
    <div className={styles.head}>
      <div
        className={cn(styles.type, {
          [styles.yellow]: card.type === "Встреча",
          [styles.blue]: card.type === "Российское мероприятие",
          [styles.green]: card.type === "Зарубежное мероприятие",
        })}
      >
        {card.type}
      </div>
      <div className={styles.options}>
        <DotMenu />
      </div>
    </div>
    <div className={styles.name}>
      <div className={styles.title}>{card.title}</div>
      <div className={styles.subtitle}>{card.subtitle}</div>
    </div>
    {card.type === "Встреча" && (
      <div className={styles.status}>
        <div className={styles.isMember}>
          <LogoCalendar /> Вы участник
        </div>
        <div className={styles.start}>{card.start}</div>
      </div>
    )}
    {card.isMember && card.type !== "Встреча" && (
      <div className={styles.isMember}>
        <LogoCalendar /> Вы участник
      </div>
    )}
    <div className={styles.contacts}>
      {card.location && (
        <div className={styles.contact}>
          <Location />
          {card.location}
        </div>
      )}
      {card.telNumber && (
        <div className={styles.contact}>
          <Phone /> {card.telNumber}
        </div>
      )}
      {card.site && (
        <div className={styles.contact}>
          <Site /> {card.site}
        </div>
      )}
    </div>
    {card.user.name && (
      <div className={styles.user}>
        <img src={card.user.avatar} alt="avatar" />
        <span>{card.user.name}</span>
      </div>
    )}
  </div>
);

export default EventInfoCard;
