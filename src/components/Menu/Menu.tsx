import React from "react";
import cn from "classnames";
import { makeStyles, SwipeableDrawer } from "@material-ui/core";

import { ReactComponent as Close } from "../../assets/icons/Close.svg";

import { menuData } from "../../data/data.mock";

import styles from "./styles.module.scss";

const useStyles = makeStyles({
  paper: {
    borderRadius: "24px 24px 0 0",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    background: "#F2F5F7",
  },
});

type Anchor = "bottom";

const Menu = ({ isMenuOpen, setIsMenuOpen }: any) => {
  const classes = useStyles();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsMenuOpen(open);
    };

  const list = (anchor: Anchor) => (
    <div
      className={cn(classes.list, {
        [classes.fullList]: anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className={styles.menu}>
        <div className={styles.head}>
          <div></div>
          <div>Меню</div>
          <div className={styles.closeButton}>
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

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          classes={{ paper: classes.paper }}
          anchor={"bottom"}
          open={isMenuOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list("bottom")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default Menu;
