import React from "react";

import Button from "../../components/Button/Button";

import { ReactComponent as Arrow } from "../../assets/icons/Arrow.svg";
import { ReactComponent as Notifications } from "../../assets/icons/Notifications.svg";
import { ReactComponent as Share } from "../../assets/icons/Share.svg";
import { ReactComponent as Confirmed } from "../../assets/icons/Confirmed.svg";

import { headerData } from "../../data/data.mock";

import styles from "./styles.module.scss";

const Header = () => (
  <header
    className={styles.header}
    style={{
      background: `url(${headerData.background})`,
      backgroundColor: headerData.bgcolor,
      backgroundSize: "100%",
    }}
  >
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
        <img src={headerData.logo} alt="Logo"></img>
      </div>
      <span>{headerData.title}</span>
    </div>
    <div className={styles.subtitle}>{headerData.subtitle}</div>
    {headerData.isMember ? (
      <div className={styles.status}>
        <div>Вы участник</div>
        <Confirmed />
      </div>
    ) : null}
  </header>
);

export default Header;
