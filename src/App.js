import React, { useState } from "react";

import Header from "./components/Header/Header";
import ForumInfo from "./components/ForumInfo/ForumInfo";
import Menu from "./components/Menu/Menu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpen = () => {
    setIsMenuOpen(true);
  };

  return (
    <div>
      <Header />
      <ForumInfo isMenuOpen={isMenuOpen} setIsMenuOpen={handleOpen} />
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}

export default App;
