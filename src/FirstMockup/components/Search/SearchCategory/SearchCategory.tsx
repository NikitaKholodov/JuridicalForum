import React, { FC } from "react";

import styles from "./styles.module.scss";

export type SearchCategoryProps = {
  name: string
}

const SearchCategory: FC<SearchCategoryProps> = ({name}) => {
  return (
    <div className={styles.category}>
      {name}
    </div>
  );
};

export default SearchCategory;
