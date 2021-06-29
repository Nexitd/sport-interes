import React from "react";
import { getDate } from "../../../Utils/Date";
import s from "./TourCard.module.css";

const TourCard = ({ item }) => {
  const { title, img, timestamp } = item;
  return (
    <div className={s.card}>
      <div className={s.section}>
        {img}
        <h3 className={s.title}>{title}</h3>
      </div>
      <div className={s.section}>
        <span className={s.text}>
          {getDate(timestamp, {
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
        </span>
      </div>
    </div>
  );
};

export default TourCard;
