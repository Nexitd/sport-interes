import React from "react";
import RuleCard from "./RuleCard/RuleCard";
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
    <div className={s.rules}>
      <h2 className={s.rules__title}> Правила </h2>

      <div className={s.cards}>
        {RulesCard.map((card) => (
          <RuleCard icon={card.icon} text={card.text} key={card.id}/>
        ))}
      </div>
    </div>
  );
};

export default Rules;
