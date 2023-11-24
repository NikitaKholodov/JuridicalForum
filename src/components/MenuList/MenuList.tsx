import React, { FC } from "react";

import { ReactComponent as Close } from "../../assets/icons/Close.svg";

import { menuData } from "../../data/data.mock";

import styles from "./styles.module.scss";

export type MenuListProps = {
  setIsMenuOpen: (value: boolean) => void;
};

const MenuList: FC<MenuListProps> = ({ setIsMenuOpen }) => {
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
              <li>
                {name}
                {sublist.length ? (
                  <ul className={styles.menuSublist}>
                    {sublist.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
