import React, { FC } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

export type ManuItemProps = {
  name: string;
  active: boolean;
};

const MenuItem: FC<ManuItemProps> = ({ name, active }) => {
  return (
    <div
      className={cn(styles.item, {
        [styles.active]: active,
      })}
    >
      {name}
    </div>
  );
};

export default MenuItem;
