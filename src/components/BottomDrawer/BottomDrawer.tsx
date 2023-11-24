import React, { FC } from "react";
import { makeStyles, Drawer } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    borderRadius: "24px 24px 0 0",
    background: "#F2F5F7",
  },
});

export type BottomDrawerProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  children: React.ReactNode;
};

const BottomDrawer: FC<BottomDrawerProps> = ({
  isMenuOpen,
  setIsMenuOpen,
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

      setIsMenuOpen(open);
    };

  return (
    <div>
      <React.Fragment>
        <Drawer
          classes={{ paper: classes.paper }}
          anchor={"bottom"}
          open={isMenuOpen}
          onClose={toggleDrawer(false)}
        >
          {children}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default BottomDrawer;
