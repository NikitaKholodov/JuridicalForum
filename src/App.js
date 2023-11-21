import React from "react";

import Header from "./components/Header/Header";
import ForumInfo from "./components/ForumInfo/ForumInfo";

import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <ForumInfo />
    </div>
  );
}

export default App;
