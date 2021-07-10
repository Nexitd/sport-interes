import React from "react";
import { Card, Col, Row } from "antd";
import s from "./Rules.module.css";

const RulesCard = [
  {
    id: 0,
    icon: "/assets/images/Main/MainBody/Rules/analytics (2) 1.svg",
    text: "Оцени статистику",
  },
  {
    id: 1,
    icon: "/assets/images/Main/MainBody/Rules/Group.svg",
    text: "Сделай прогноз",
  },
  {
    id: 2,
    icon: "/assets/images/Main/MainBody/Rules/soccer-gear 1.svg",
    text: " Следи за матчем в режиме онлайн",
  },
  {
    id: 3,
    icon: "/assets/images/Main/MainBody/Rules/business-and-finance 10.svg",
    text: "Получи выигрыш",
  },
];

const Rules = () => {
  return (
    <>
      <h2 className={s.rules__title}>Правила</h2>
      <Row gutter={[10, 10]}>
        {RulesCard.map((card) => (
          <Col span={6} key={card.id} xs={24} lg={6}>
            <Card className={s.card} hoverable>
              <img src={card.icon} alt="" />
              <p className={s.card__text}>{card.text}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Rules;
