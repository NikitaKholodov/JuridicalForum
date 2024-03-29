import React, { FC } from "react";

import { ReactComponent as Close } from "../../../assets/icons/Close.svg";
import { ReactComponent as ChevronLeft } from "../../../assets/icons/ChevronLeft.svg";
import ProgramCard from "../ProgramCard/ProgramCard";
import Accordion from "../../Accordion/Accordion";
import Speakers from "../../Speakers/Speakers";
import TranslationCard from "../../TranslationCard/TranslationCard";

import styles from "./styles.module.scss";

export type ProgramInfoProps = {
  status?: string;
  category?: string;
  title?: string;
  place?: string;
  datetime?: string;
  background?: string;
  setIsPageOpen: (value: boolean) => void;
};

const ProgramInfo: FC<ProgramInfoProps> = ({
  status,
  category,
  title,
  place,
  datetime,
  background,
  setIsPageOpen,
}) => {
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPageOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <div
          className={styles.back}
          onClick={(e) => {
            handleClose(e);
          }}
        >
          <ChevronLeft />
        </div>
        <div>Программа</div>
        <div
          className={styles.closeButton}
          onClick={(e) => {
            handleClose(e);
          }}
        >
          <Close />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.card}>
          <ProgramCard
            key={title}
            status={status}
            category={category}
            title={title}
            place={place}
            datetime={datetime}
            background={background}
            fullWidth
          />
        </div>
        <Speakers />
        <div className={styles.translation}>
          <span>Трансляции</span>
          <TranslationCard />
        </div>
        <Accordion
          title={"описание"}
          content="• Правовая квалификация выплаты, осуществляемой страховщиком по договору ОСАГО в денежной форме (страховое возмещение или убытки).• Вопросы осуществления страхового возмещения по «моторным» видам страхования в натуральной форме в условиях нехватки на российском рынке запасных частей вследствие действия международных экономических санкций.• Вопросы исполнения страховыми организациями обязательств по договорам инвестиционного страхования жизни в части выплаты инвестиционного дохода.• Вопросы, возникающие при рассмотрении споров между потребителями финансовых услуг и кредитными организациями, касающиеся возврата платы (полностью или в части), внесенной потребителями за предоставление им дополнительных услуг при заключении кредитных договоров.• «Новые» тематики обращений, поступающих финансовому уполномоченному в отношении кредитных организаций в связи с изменением экономической ситуации в стране.• Вопросы, связанные с особенностями организации взаимодействия Службы финансового уполномоченного с финансовыми организациями и потребителями финансовых услуг, в том числе в части внедрения новых и развития существующих цифровых сервисов, направленных на упрощение порядка взаимодействия с финансовым уполномоченным потребителей финансовых услуг и финансовых организаций.
Модератор"
        />
      </div>
    </div>
  );
};

export default ProgramInfo;
