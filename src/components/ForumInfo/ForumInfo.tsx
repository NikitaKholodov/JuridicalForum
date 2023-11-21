import React from "react";

import MenuItem from "../MenuItem/MenuItem";
import Card from "../Card/Card";
import Accordion from "../Accordion/Accordion";
import Contact from "../Contact/Contact";
import burger from "../../assets/icons/burger.png";

import {
  accordionData,
  cardData,
  contactsData,
  menuData,
} from "../../data/data.mock";

import styles from "./styles.module.scss";

export default function ForumInfo() {
  return (
    <div className={styles.content}>
      <div className={styles.menu}>
        <img src={burger} alt="menu" />
        {menuData.map((item) => (
          <MenuItem active={item.active} name={item.name}></MenuItem>
        ))}
      </div>
      <div className={styles.cards}>
        {cardData.map((item) => (
          <Card color={item.color} name={item.name} icon={item.icon} />
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
        {contactsData.map((item) => (
          <Contact info={item.info} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}
