import React, { FC } from "react";

import Card from "../Card/Card";
import Accordion from "../Accordion/Accordion";
import Contact from "../Contact/Contact";
import ScrollableTabPanel from "../ScrollableTabPanel/ScrollableTabPanel";

import { accordionData, cardData, contactsData } from "../../data/data.mock";

import styles from "./styles.module.scss";

export type ForumInfoProps = {
  setIsMenuOpen: (value: boolean) => void;
  isMenuOpen: boolean;
};

const ForumInfo: FC<ForumInfoProps> = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <div className={styles.content}>
      <div className={styles.menu}>
        <ScrollableTabPanel
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />
      </div>
      <div className={styles.cards}>
        {cardData.map(({ name, color, icon }) => (
          <Card key={name} color={color} name={name} icon={icon} />
        ))}
      </div>
      <div className={styles.description}>
        <Accordion
          title={accordionData.title}
          content={accordionData.content}
        />
      </div>
      <div className={styles.contacts}>
        <span>Обратная связь</span>
        {contactsData.map(({ icon, info, linkType }) => (
          <Contact key={icon} info={info} linkType={linkType} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default ForumInfo;
