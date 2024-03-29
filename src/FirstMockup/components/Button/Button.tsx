import React from "react";

import styles from "./styles.module.scss";

const Button = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={styles.button} {...props}>
    {children}
  </button>
);

export default Button;
