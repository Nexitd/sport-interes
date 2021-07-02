import React from "react";
import { Col } from "antd";
import s from "./RoomCard.module.css";

const RoomCard = ({ edit, title, members, moreInf }) => {
  return (
    <Col span={24}>
      <div className={s.card}>
        <div className={s.section}>
          <button>{edit}</button>
          <span className={s.name}>{title}</span>
        </div>
        <div className={s.section}>
          <span className={s.members}>{members} участника</span>
          <button>{moreInf}</button>
        </div>
      </div>
    </Col>
  );
};

export default RoomCard;
