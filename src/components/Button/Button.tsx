import React from "react";

import styles from "./styles.module.scss";

export default function Button({
  children,
  ...props
}: React.PropsWithChildren) {
  return <div className={styles.button}>{children}</div>;
}
