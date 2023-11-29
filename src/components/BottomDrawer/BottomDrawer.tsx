import React, { FC } from "react";

import { makeStyles, Drawer } from "@material-ui/core";

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
};

const BottomDrawer: FC<BottomDrawerProps> = ({
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
        <Drawer
          classes={{ paper: classes.paper }}
          anchor={"bottom"}
          open={isPageOpen}
          onClose={toggleDrawer(false)}
        >
          {children}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default BottomDrawer;
