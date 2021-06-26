import React from "react";
import s from "./PointsCard.module.css";

const PointsCard = (props) => {
    return (
        <div className={s.card}>
            <div className={s.card__section}>
                <p className={s.card__text + ' ' + s.count}>{props.count}</p>
            </div>
            <div className={s.card__section}>
                <p className={s.card__text}>{props.text}</p>
            </div>
        </div>
    );
};

export default PointsCard;
