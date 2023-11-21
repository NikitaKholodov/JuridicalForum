import React, { FC } from "react";

import styles from "./styles.module.scss";

export type ContactProps = {
  icon: string;
  info: string;
  linkType: string;
};

const Contact: FC<ContactProps> = ({ icon, info, linkType }) => (
  <div className={styles.item}>
    <img src={icon} alt="icon" className={styles.icon}></img>
    <div className={styles.info}>
      <a href={linkType + info}>{info}</a>
    </div>
  </div>
);

export default Contact;
