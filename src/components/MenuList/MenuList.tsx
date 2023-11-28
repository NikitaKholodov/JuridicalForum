import React, { FC, useState } from "react";

import { ReactComponent as Close } from "../../assets/icons/Close.svg";

import { menuData } from "../../data/data.mock";

import styles from "./styles.module.scss";
import BottomDrawer from "../BottomDrawer/BottomDrawer";
import Programms from "../Programms/Programms";

export type MenuListProps = {
  setIsMenuOpen: (value: boolean) => void;
};

const MenuList: FC<MenuListProps> = ({ setIsMenuOpen }) => {
  const [programmsOpened, setProgrammsOpened] = useState(false)

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
                      <li key={item} onClick={() =>  setProgrammsOpened(true)}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BottomDrawer isPageOpen={programmsOpened} setIsPageOpen={() => setProgrammsOpened(false)}>
        <Programms setIsPageOpen={() => setProgrammsOpened(false)} />
      </BottomDrawer>
    </div>
  );
};

export default MenuList;
