import React, { FC, useState } from "react";
import cn from "classnames";

import { ReactComponent as Home } from "../../assets/icons/Home.svg";
import { ReactComponent as Calendar } from "../../assets/icons/Calendar.svg";
import { ReactComponent as TicketStar } from "../../assets/icons/Ticket-Star.svg";
import { ReactComponent as Chat } from "../../assets/icons/chat.svg";
import { ReactComponent as Profile } from "../../assets/icons/Profile.svg";

import styles from "./styles.module.scss";
import { menuData } from "../../data/data.mock";

const Menu: FC = () => {
  const [active, setActive] = useState(1);

  const handleGetIcon = (icon: string) => {
    switch (icon) {
      case "home":
        return <Home />;
      case "calendar":
        return <Calendar />;
      case "ticket":
        return <TicketStar />;
      case "chat":
        return <Chat />;
      case "profile":
        return <Profile />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.wrapper}>
      {menuData.map(({ icon, label, id }) => (
        <div
          key={id}
          className={cn(styles.menuItem, {
            [styles.active]: active === id,
          })}
          onClick={() => setActive(id)}
        >
          {handleGetIcon(icon)}
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Menu;
