import React from "react";
import { Route, Routes } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import Home from "./Home/Home";
import CalendarPage from "./components/CalendarPage/CalendarPage";

function SecondMockup() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
      <Menu />
    </div>
  );
}

export default SecondMockup;
