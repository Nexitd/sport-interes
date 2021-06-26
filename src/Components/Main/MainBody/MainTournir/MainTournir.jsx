import React from "react";
import s from "./MainTournir.module.css";
import TournirCard from "./TournirCards/TournirCard";

const MainTournir = (props) => {
    let Card = props.state.TournirCards.map((card) => (
        <TournirCard
            id={card.id}
            name={card.name}
            icon={card.icon}
            background={card.background}
            color={card.color}
        />
    ));

    return (
        <div className={s.cards}>
            { Card }
        </div>
    );
};

export default MainTournir;
