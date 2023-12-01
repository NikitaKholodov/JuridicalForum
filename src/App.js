import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import FirstMockup from "./FirstMockup/FirstMockup";
import SecondMockup from "./SecondMockup/SecondMockup";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="firstmockup" element={<FirstMockup />}/>
      <Route path="secondmockup" element={<SecondMockup />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
