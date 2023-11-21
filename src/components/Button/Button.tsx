import React from "react";

import styles from "./styles.module.scss";

const Button = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} className={styles.button}>
    {children}
  </button>
);

export default Button;
