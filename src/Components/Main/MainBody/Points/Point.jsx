import React from "react";
import s from "./Point.module.css";
import PointsCard from "./PointsCard/PointsCard";

const Info = [
    {
        count: '+5',
        text: 'за угаданный счет'
    },
    {
        count: '+3',
        text: ' за угаданный исход и разницу мячей'
    },
    {
        count: '+1',
        text: 'за угаданный исход'
    }
];

const Points = () => (
    <div className={s.points}>
        <h2 className={s.points__title}>Начисление очков</h2>
        <div className={s.cards}>
            {Info.map((card) => (
                <PointsCard text={card.text} count={card.count} />
            ))}
        </div>
    </div>
);

export default Points;
