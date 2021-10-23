import React from "react";
import { getDate } from "../../../Utils/Date";
import s from "./TourCard.module.css";

const TourCard = ({ item }) => {
  const { name, logo, city } = item;
  
  return (
    <div className={s.card}>
      <div className={s.section}>
        <img src={logo} alt=""/>
        <h3 className={s.title}>{name}</h3>
      </div>
      <div className={s.section}>
        {city}
        {/* <span className={s.text}>
          {getDate(, {
            month: "short",
            day: "numeric",
          })}
        </span>
        <span className={s.text}>
          {getDate(timestamp, {
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          })}
        </span> */}
      </div>
    </div>
  );
};

export default TourCard;
