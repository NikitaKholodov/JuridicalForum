import React from "react";

import { ReactComponent as Arrow } from "../../assets/icons/Arrow.svg";
import { ReactComponent as Notifications } from "../../assets/icons/Notifications.svg";
import { ReactComponent as Share } from "../../assets/icons/Share.svg";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import { ReactComponent as Confirmed } from "../../assets/icons/Confirmed.svg";
import Button from "../../components/Button/Button";

import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navigation}>
        <div className={styles.return}>
          <Button>
            <Arrow />
          </Button>
        </div>
        <div className={styles.rightButtons}>
          <Button>
            <Notifications />
          </Button>
          <Button>
            <Share />
          </Button>
        </div>
      </div>
      <div className={styles.title}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <span>XI ПЕТЕРБУРГСКИЙ МЕЖДУНАРОДНЫЙ ЮРИДИЧЕСКОЙ ФОРУМ 2023</span>
      </div>
      <div className={styles.subtitle}>
        11-13 мая • КВЦ «Экспофорум» • Санкт-Петербург, Россия
      </div>
      <div className={styles.status}>
        <div>Вы участник</div>
        <Confirmed />
      </div>
    </header>
  );
}
