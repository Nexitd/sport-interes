import React from "react";
import s from "./Point.module.css";
import PointsCard from "./PointsCard/PointsCard";

const Points = (props) => {
    let pointCard = props.state.Points.map((card) => (
        <PointsCard text={card.text} count={card.count} />
    ));

    return (
        <div className={s.points}>
            <h2 className={s.points__title}> {props.state.PointsTitle} </h2>
            
            <div className={s.cards}>
                {pointCard}
            </div>
        </div>
    );
};

export default Points;
