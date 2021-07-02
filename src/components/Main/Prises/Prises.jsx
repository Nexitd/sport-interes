import { Col, Row } from "antd";
import React from "react";
import s from "./Prises.module.css";

const Prises = () => {
  return (
    <div className={s.prises}>
      <h3 className={s.title}>Призы</h3>
      <Row>
        <Col ms={24} lg={8} className={s.prise__item}>
          <Row justify="space-between">
            <img
              src={"/assets/images/Main/MainBody/Prises/Group 276.png"}
              alt=""
            />
            <img
              src={"/assets/images/Main/MainBody/Prises/Group 278.png"}
              alt=""
            />
            <img
              src={"/assets/images/Main/MainBody/Prises/Group 277.png"}
              alt=""
            />
          </Row>
          <p className={s.prise__text}>
            Победитель по количеству очков в каждом турнире
          </p>
        </Col>
        <Col sm={12} lg={4} className={s.prise__item}>
          <img
            src={"/assets/images/Main/MainBody/Prises/Group 275.png"}
            alt=""
          />
          <p className={s.prise__text}>
            Рекордсмен тура среди всех туров отдельного турнира
          </p>
        </Col>
        <Col sm={12} lg={4} className={s.prise__item}>
          <img
            src={"/assets/images/Main/MainBody/Prises/Group 274.png"}
            alt=""
          />
          <p className={s.prise__text}>
            Победитель по количеству угаданных счетов в каждом турнире
          </p>
        </Col>
        <Col sm={12} lg={4} className={s.prise__item}>
          <img
            src={"/assets/images/Main/MainBody/Prises/Group 273.png"}
            alt=""
          />
          <p className={s.prise__text}>Лучший прогнозист на конец года</p>
        </Col>
        <Col sm={12} lg={4} className={s.prise__item}>
          <img
            src={"/assets/images/Main/MainBody/Prises/Group 269.png"}
            alt=""
          />
          <p className={s.prise__text}>Победитель тура</p>
        </Col>
      </Row>
    </div>
  );
};

export default Prises;
