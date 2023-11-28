import React, { FC, useState } from "react";

import { ReactComponent as SearchIcon2 } from "../../assets/icons/SearchIcon2.svg";
import SearchCategory from "./SearchCategory/SearchCategory";
import ProgrammCard from "../Programms/ProgrammCard/ProgrammCard";

import { searchData } from "../../data/data.mock";

import styles from "./styles.module.scss";





const Search: FC = () => {
  const [searchFieldValue, setSearchFieldValue] = useState("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchField}>
        <SearchIcon2 />
        <input
          onChange={(e) => setSearchFieldValue(e.target.value)}
          type="text"
          placeholder="Поиск"
          className={styles.input}
        ></input>
      </div>
      <div className={styles.categories}>
        {!searchFieldValue &&
          searchData.categories.map((item) => <SearchCategory key={item} name={item} />)}
      </div>
      <div className={styles.results}>
        {searchFieldValue &&
          searchData.results.map(
            ({ status, category, title, place, datetime, background, id }) => (
              <ProgrammCard key={id}
                status={status}
                category={category}
                title={title}
                place={place}
                datetime={datetime}
                background={background}
                fullWidth
              />
            )
          )}
      </div>
    </div>
  );
};

export default Search;
