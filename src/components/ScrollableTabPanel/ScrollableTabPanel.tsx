import React, { FC } from "react";

import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import burger from "../../assets/icons/burger.png";

import { tabsData } from "../../data/data.mock";

import styles from "./styles.module.scss";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
}));

const StyledTabs = withStyles({
  root: {
    borderBottom: "0px solid #e8e8e8",
    boxShadow: "none",
  },
  indicator: {
    backgroundColor: "#1890ff",
    display: "none",
  },
})(Tabs);

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      minHeight: 40,
      maxHeight: 40,
      borderRadius: 12,
      fontSize: 13,
      backgroundColor: "#ffffff",
      padding: "11px 21px",
      color: "#778A9B",
      marginRight: theme.spacing(1),
      fontFamily: ["SF Pro Display", "sans-serif"].join(","),
      "&$selected": {
        backgroundColor: "#212122",
        color: "#ffffff",
      },
    },
    selected: {},
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabProps {
  label: string;
}

export type ScrollableTabPanelProps = {
  setIsMenuOpen: (value: boolean) => void;
  isMenuOpen: boolean;
};

const ScrollableTabPanel: FC<ScrollableTabPanelProps> = ({
  setIsMenuOpen,
  isMenuOpen,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" elevation={0}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable auto tabs example"
        >
          <img
            className={styles.menuIcon}
            src={burger}
            alt="menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          {tabsData.map(({ name, active }) => (
            <StyledTab key={name} label={name} />
          ))}
        </StyledTabs>
      </AppBar>
    </div>
  );
};

export default ScrollableTabPanel;
