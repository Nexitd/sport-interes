import React from "react";
import s from "./RuleCard.module.css";

const RuleCard = (props) => {
    return (
        <div className={s.card}>
            <img src={props.icon} alt=""/>
            <p className={s.card__text}>{props.text}</p>
        </div>
    );
};

export default RuleCard;
