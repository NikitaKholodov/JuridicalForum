import React, { FC } from "react";

import styles from "./styles.module.scss";

export type ContactProps = {
  icon: string;
  info: string;
};

const Contact: FC<ContactProps> = ({ icon, info }) => {
  return (
    <div className={styles.item}>
      <img src={icon} alt="icon" className={styles.icon}></img>
      <div className={styles.info}>{info}</div>
    </div>
  );
};

export default Contact;
