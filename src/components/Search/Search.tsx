import React, { FC, useState } from "react";

import { ReactComponent as SearchIcon2 } from "../../assets/icons/SearchIconSmall.svg";
import SearchCategory from "./SearchCategory/SearchCategory";
import ProgramCard from "../Programms/ProgramCard/ProgramCard";

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
        />
      </div>
      <div className={styles.categories}>
        {!searchFieldValue &&
          searchData.categories.map((name) => (
            <SearchCategory key={name} name={name} />
          ))}
      </div>
      <div className={styles.results}>
        {searchFieldValue &&
          searchData.results.map(
            ({ status, category, title, place, datetime, background, id }) => (
              <ProgramCard
                key={id}
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
