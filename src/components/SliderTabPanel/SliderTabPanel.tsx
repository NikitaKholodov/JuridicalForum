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
import { programmsData } from "../../data/data.mock";

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
    backgroundColor: "#ffffff",
    padding: 2,
    borderRadius: 12,
    minHeight: 32,
    display: "flex",
    gap: 2,
    marginBottom: 36,
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
      minHeight: 32,
      maxHeight: 32,
      borderRadius: 10,
      fontSize: 14,
      backgroundColor: "#ffffff",
      padding: "7px 0px",
      color: "#778A9B",
      fontFamily: ["SF Pro Display", "sans-serif"].join(","),
      "&$selected": {
        backgroundColor: "#FDF0F4",
        color: "#A6192E",
      },
    },
    selected: {},
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabProps {
  label: string;
}

const SliderTabPanel: FC = () => {
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
          variant="fullWidth"
          scrollButtons="off"
          aria-label="Slider auto tabs example"
        >
          {programmsData.topTabs.map((item) => (
            <StyledTab key={item} label={item} />
          ))}
        </StyledTabs>
      </AppBar>
    </div>
  );
};

export default SliderTabPanel;
