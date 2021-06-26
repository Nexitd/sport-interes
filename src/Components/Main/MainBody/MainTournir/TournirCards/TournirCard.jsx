import React from "react";
import s from "./TournirCard.module.css";

const TournirCard = (props) => {
    return (
        <div className={s.card} id={props.id}>
            <div className={s.card__head}>
                <img src={props.background} alt='' />
            </div>
            <div className={s.card__body}>
                <p className={s.name + ' ' + props.color}>{props.name}</p>
                <img src={props.icon} alt='' />
            </div>
        </div>
    );
};

export default TournirCard;
