import React from "react";
import s from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <div className={s.main__header}>
      <div className={s.content}>
        <h2 className={s.title}>Прогнозируй и получай призы</h2>
        <p className={s.main__header_text}>
          Стань лучшим среди аналитиков. Соревнуйся с друзьями. Прогнозы без
          денежных затрат - это и есть спортивный интерес.
        </p>
      </div>
    </div>
  );
};

export default MainHeader;
