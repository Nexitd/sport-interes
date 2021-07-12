import React from "react";
import { Row, Col } from "antd";
import s from "./MatchHead.module.css";

const MatchHead = ({ title, timetable, ...rest }) => {
  return (
    <div>
      <h2 className='title'>{title}</h2>

      <div className={s.head}>
        <Row className={s.match__head}>
          <Col span={24}>
            <p className={s.timetable}>{timetable}</p>
            <p className={s.tour}>{rest.tour}</p>
          </Col>
          <Col span={9} className={s.section}>
            {rest.firstComand}
            <p className={s.command}>{rest.firstComandTitle}</p>
            <p className={s.city}>{rest.firstComandCity}</p>
          </Col>
          <Col span={6} className={s.section}>
            <span className={s.score}>{rest.score}</span>
            <p className={s.time}>{rest.time}</p>
            <p className={s.timing}>{rest.timing}</p>
          </Col>
          <Col span={9} className={s.section}>
            {rest.secondComand}
            <p className={s.command}>{rest.secondComandTitle}</p>
            <p className={s.city}>{rest.secondComandCity}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MatchHead;
