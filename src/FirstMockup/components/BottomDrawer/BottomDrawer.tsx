import React, { FC } from "react";

import { makeStyles, Drawer, SwipeableDrawer } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    borderRadius: "24px 24px 0 0",
    background: "#F2F5F7",
  },
});

export type BottomDrawerProps = {
  isPageOpen: boolean;
  setIsPageOpen: (value: boolean) => void;
  children: React.ReactNode;
  swipeable: boolean;
};

const BottomDrawer: FC<BottomDrawerProps> = ({
  isPageOpen,
  setIsPageOpen,
  children,
  swipeable,
}) => {
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

      setIsPageOpen(open);
    };

  return (
    <React.Fragment>
      {swipeable ? (
        <SwipeableDrawer
          classes={{ paper: classes.paper }}
          anchor={"bottom"}
          open={isPageOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {children}
        </SwipeableDrawer>
      ) : (
        <Drawer
          classes={{ paper: classes.paper }}
          anchor={"bottom"}
          open={isPageOpen}
          onClose={toggleDrawer(false)}
        >
          {children}
        </Drawer>
      )}
    </React.Fragment>
  );
};

export default BottomDrawer;
