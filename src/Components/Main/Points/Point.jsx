import React from "react";
import { Col, Row } from "antd";
import classNames from "classnames";
import s from "./Point.module.css";

const Info = [
  {
    id: 0,
    count: "+5",
    text: "за угаданный счет",
  },
  {
    id: 1,
    count: "+3",
    text: " за угаданный исход и разницу мячей",
  },
  {
    id: 2,
    count: "+1",
    text: "за угаданный исход",
  },
];

const Points = () => (
  <>
    <h2 className={s.points__title}>Начисление очков</h2>
    <Row gutter={[10, 0]}>
      {Info.map((card) => (
        <Col span={8} key={card.id}>
          <div className={s.card__section}>
            <span className={classNames([s.card__text, s.count])}>
              {card.count}
            </span>
          </div>
          <div className={s.card__section}>
            <span className={s.card__text}>{card.text}</span>
          </div>
        </Col>
      ))}
    </Row>
  </>
);

export default Points;
