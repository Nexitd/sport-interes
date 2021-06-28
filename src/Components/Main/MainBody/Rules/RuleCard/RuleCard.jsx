import React from "react";
import s from "./RuleCard.module.css";

const RuleCard = ({text, icon}) => (
        <div className={s.card}>
            <img src={icon} alt=""/>
            <p className={s.card__text}>{text}</p>
        </div>
);

export default RuleCard;
