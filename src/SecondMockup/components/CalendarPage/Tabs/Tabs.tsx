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
import { CardsData, DaysData } from "../CalendarPage";
import {
  allCalendarData,
  calendarEventsData,
  forumEventsCalendarData,
  myEventsCalendarData,
} from "../data.mock";

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
    maxHeight: 40,
    minHeight: 40,
    marginBottom: 16,
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
      minWidth: 80,
      borderRadius: 21,
      fontSize: 11,
      backgroundColor: "#ffffff",
      padding: "5px 17.5px",
      color: "#282828",
      marginRight: 10.5,
      fontFamily: ["SF Pro Display", "sans-serif"].join(","),
      "&$selected": {
        backgroundColor: "#282828",
        color: "#ffffff",
      },
    },
    selected: {},
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabProps {
  label: string;
  onClick: (event: React.MouseEvent) => void;
}

export type TabsProps = {
  handleSetData: (daysData: DaysData, cardsData: CardsData) => void;
};

const ScrollableTabPanel: FC<TabsProps> = ({ handleSetData }) => {
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
          aria-label="scrollable auto tabs"
        >
          <StyledTab
            label={"Все"}
            onClick={() => handleSetData(allCalendarData, calendarEventsData)}
          />
          <StyledTab
            label={"Мои"}
            onClick={() =>
              handleSetData(
                myEventsCalendarData,
                calendarEventsData.filter((item) => item.card.isMember === true)
              )
            }
          />
          <StyledTab
            label={"Мероприятия фонда"}
            onClick={() =>
              handleSetData(
                forumEventsCalendarData,
                calendarEventsData.filter((item) => item.card.isForum === true)
              )
            }
          />
        </StyledTabs>
      </AppBar>
    </div>
  );
};

export default ScrollableTabPanel;
