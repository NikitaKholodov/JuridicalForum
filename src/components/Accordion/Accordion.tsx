import React, { FC, useState } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

export type AccordionProps = {
  title: string;
  content: string;
};

const Accordion: FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div
        className={cn(styles.content, {
          [styles.opened]: isOpen,
        })}
      >
        {content}
      </div>
      <div className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? "Читать все" : "Свернуть"}
      </div>
    </div>
  );
};

export default Accordion;
