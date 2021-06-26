import React from "react";
import s from "./Rules.module.css";
import RuleCard from "./RuleCard/RuleCard";

const Rules = (props) => {
    let ruleCard = props.state.Rules.map(card => <RuleCard icon={card.icon} text={card.text}/>) 

    return (
        <div className={s.rules}>
            <h2 className={s.rules__title}> {props.state.RulesTitle} </h2>

            <div className={s.cards}>{ruleCard}</div>
        </div>
    );
};

export default Rules;
