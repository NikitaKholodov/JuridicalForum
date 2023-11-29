import React, { FC } from "react";

import { makeStyles, SwipeableDrawer } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    borderRadius: "24px 24px 0 0",
    background: "#F2F5F7",
  },
});

export type SwipeableBottomDrawerProps = {
  isPageOpen: boolean;
  setIsPageOpen: (value: boolean) => void;
  children: React.ReactNode;
};

const SwipeableBottomDrawer: FC<SwipeableBottomDrawerProps> = ({
  isPageOpen,
  setIsPageOpen,
  children,
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
    <div>
      <React.Fragment>
        <SwipeableDrawer
          classes={{ paper: classes.paper }}
          anchor={"bottom"}
          open={isPageOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {children}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default SwipeableBottomDrawer;
