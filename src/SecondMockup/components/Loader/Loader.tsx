import React, { FC } from "react";

import { ReactComponent as LoaderIcon } from "../../assets/icons/LoaderIcon.svg";

import styles from "./styles.module.scss";
import { Modal } from "@material-ui/core";

export type LoaderProps = {
  isOpen: boolean;
};

const Loader: FC<LoaderProps> = ({ isOpen }) => {
  return (
    <Modal open={isOpen}>
      <div className={styles.wrapper}>
        <LoaderIcon />
      </div>
    </Modal>
  );
};

export default Loader;
