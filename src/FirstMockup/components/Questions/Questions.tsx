import React, { FC, useState } from "react";
import cn from "classnames";

import { Modal } from "@material-ui/core";
import { ReactComponent as Close } from "../../assets/icons/Close.svg";
import BottomDrawer from "../BottomDrawer/BottomDrawer";
import { ReactComponent as Confirmed } from "../../assets/icons/Confirmed.svg";

import styles from "./styles.module.scss";

const Questions: FC = () => {
  const [fieldValue, setFieldValue] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.MouseEvent, value: string) => {
    e.preventDefault();
    setIsDrawerOpen(false);
    setFieldValue("");
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <span>Остались вопросы?</span>
        <span>Напишите нам и мы вам ответим</span>
        <button onClick={() => setIsDrawerOpen(true)}>Написать</button>
      </div>
      <BottomDrawer
        swipeable
        isPageOpen={isDrawerOpen}
        setIsPageOpen={setIsDrawerOpen}
      >
        <div className={styles.drawerContent}>
          <div className={styles.head}>
            <div />
            <div>Задать вопрос</div>
            <div
              className={styles.closeButton}
              onClick={() => setIsDrawerOpen(false)}
            >
              <Close />
            </div>
          </div>
          <form>
            <textarea
              className={styles.input}
              placeholder="Введите сообщение"
              onChange={(e) => setFieldValue(e.target.value)}
            />
            <button
              className={cn(styles.button, {
                [styles.disabled]: !fieldValue,
              })}
              disabled={!fieldValue}
              onClick={(e) => handleSubmit(e, fieldValue)}
            >
              Отправить
            </button>
          </form>
        </div>
      </BottomDrawer>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={styles.modal}>
          <div>
            <Confirmed />
          </div>
          <div className={styles.modalLabel}>
            Выше сообщение успешно отправлено!
          </div>
          <div
            className={styles.modalClose}
            onClick={() => setIsModalOpen(false)}
          >
            <Close />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Questions;
