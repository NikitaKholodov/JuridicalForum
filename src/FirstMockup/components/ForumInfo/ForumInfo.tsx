import React, { FC } from "react";

import Card from "../Card/Card";
import Accordion from "../Accordion/Accordion";
import Contact from "../Contact/Contact";
import ScrollableTabPanel from "../ScrollableTabPanel/ScrollableTabPanel";
import burger from "../../assets/icons/burger.png";

import { accordionData, cardData, contactsData } from "../../data/data.mock";

import styles from "./styles.module.scss";
import Questions from "../Questions/Questions";

export type ForumInfoProps = {
  setIsMenuOpen: (value: boolean) => void;
  isMenuOpen: boolean;
};

const ForumInfo: FC<ForumInfoProps> = ({ setIsMenuOpen, isMenuOpen }) => (
  <div className={styles.content}>
    <div className={styles.menu}>
      <img
        className={styles.menuIcon}
        src={burger}
        alt="menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <div className={styles.tabs}>
        <ScrollableTabPanel
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />
      </div>
    </div>
    <div className={styles.cards}>
      {cardData.map(({ name, color, icon, id }) => (
        <Card key={id} color={color} name={name} icon={icon} />
      ))}
    </div>
    <div className={styles.description}>
      <Accordion title={accordionData.title} content={accordionData.content} />
    </div>
    <div className={styles.contacts}>
      <span>Обратная связь</span>
      {contactsData.map(({ icon, info, linkType, id }) => (
        <Contact key={id} info={info} linkType={linkType} icon={icon} />
      ))}
    </div>
    <Questions />
  </div>
);

export default ForumInfo;
