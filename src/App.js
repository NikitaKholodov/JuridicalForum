import React, { useState } from "react";

import Header from "./components/Header/Header";
import ForumInfo from "./components/ForumInfo/ForumInfo";
import BottomDrawer from "./components/BottomDrawer/BottomDrawer";
import MenuList from "./components/MenuList/MenuList";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpen = () => {
    setIsMenuOpen(true);
  };

  return (
    <div>
      <Header />
      <ForumInfo isMenuOpen={isMenuOpen} setIsMenuOpen={handleOpen} />
      <BottomDrawer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
        <MenuList setIsMenuOpen={setIsMenuOpen} />
      </BottomDrawer>
    </div>
  );
}

export default App;
