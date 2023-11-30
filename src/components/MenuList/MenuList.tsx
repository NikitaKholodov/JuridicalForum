import React, { FC, useState } from "react";

import { ReactComponent as Close } from "../../assets/icons/Close.svg";
import BottomDrawer from "../BottomDrawer/BottomDrawer";
import Programms from "../Programms/Programms";

import { menuData } from "../../data/data.mock";

import styles from "./styles.module.scss";

export type MenuListProps = {
  setIsMenuOpen: (value: boolean) => void;
};

const MenuList: FC<MenuListProps> = ({ setIsMenuOpen }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("");

  const handleMenuItemClick = (itemName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedMenuItem(itemName);
  };

  const handleCloseDrawer = () => {
    setSelectedMenuItem("");
  };

  const getDrawerContent = () => {
    switch (selectedMenuItem) {
      case "Программа":
        return <Programms setIsPageOpen={handleCloseDrawer} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className={styles.menu}>
        <div className={styles.head}>
          <div></div>
          <div>Меню</div>
          <div
            className={styles.closeButton}
            onClick={() => setIsMenuOpen(false)}
          >
            <Close />
          </div>
        </div>
        <div className={styles.body}>
          <ul className={styles.menuList}>
            {menuData.map(({ name, sublist }) => (
              <li key={name}>
                {name}
                {sublist.length ? (
                  <ul className={styles.menuSublist}>
                    {sublist.map((item) => (
                      <li
                        key={item}
                        onClick={(e) => handleMenuItemClick(item, e)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BottomDrawer
        isPageOpen={!!selectedMenuItem}
        setIsPageOpen={handleCloseDrawer}
      >
        {getDrawerContent()}
      </BottomDrawer>
    </div>
  );
};

export default MenuList;
