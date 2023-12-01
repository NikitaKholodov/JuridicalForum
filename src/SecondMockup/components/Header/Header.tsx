import React from "react";

import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import { ReactComponent as Focus } from "../../assets/icons/Focus.svg";
import { ReactComponent as Search } from "../../assets/icons/Search.svg";
import { ReactComponent as Notifications } from "../../assets/icons/Notifications.svg";
import { ReactComponent as Apps } from "../../assets/icons/Apps.svg";
import HeaderCard from "../HeaderCard/HeaderCard";

import { headerCardsData } from "../../data/data.mock";

import styles from "./styles.module.scss";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.navigation}>
      <div className={styles.about}>
        <Logo />
        <span>О фонде</span>
      </div>
      <div className={styles.buttons}>
        <div className={styles.circleButton}>
          <Focus />
        </div>
        <div className={styles.circleButton}>
          <Search />
        </div>
        <div className={styles.circleButton}>
          <Notifications />
        </div>
      </div>
    </div>
    <div className={styles.services}>
      <div className={styles.allServices}>
        <div className={styles.servicesIcon}>
          <Apps />
        </div>
        <span>Все сервисы</span>
      </div>
      {headerCardsData.map(({ label, img, id }) => (
        <HeaderCard key={id} img={img} label={label} />
      ))}
    </div>
  </header>
);

export default Header;
