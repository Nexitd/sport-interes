import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routing/routes";
import s from "./Footer.module.css";

const textSortConstants = [
  "О проекте",
  "Правила",
  "Контакты",
  "Приложение",
  "Пользовательное соглашение",
];

const forecastsConstants = [
  "Прогнозы на футбол",
  "Прогнозы на хоккей",
  "Прогнозы на баскетбол",
  "Прогнозы на Лигу чемпионов",
  "Прогнозы на Лигу Европы",
];

const Footer = () => {
  return (
    <div className={s.footerContent}>
      <Row className="content">
        <Col xl={6} className={s.img_center}>
          <Link to={routes.main}>
            <img src="/assets/images/Header/logo_sport 1.svg" alt="" />
          </Link>
          <img src="/assets/images/Footer/image-301.png" alt="" />
          <img src="/assets/images/Footer/image-302.png" alt="" />
          <p className={s.text}>© 2020 Прогнозы на спорт</p>
        </Col>
        <Col xl={6}>
          <h3 className={s.title}>Спортивный интерес</h3>
          <ul>
            {textSortConstants.map((text, index) => (
              <li className={s.list__item} key={index}>
                {text}
              </li>
            ))}
          </ul>
        </Col>
        <Col xl={6}>
          <h3 className={s.title}>Прогнозы</h3>
          <ul>
            {forecastsConstants.map((text, index) => (
              <li className={s.list__item} key={index}>
                {text}
              </li>
            ))}
          </ul>
        </Col>
        <Col xl={6}>
          <h3 className={s.title}>Мы в социальных сетях</h3>
          <img src="/assets/images/Footer/Group 735.svg" alt="" />
          <img src="/assets/images/Footer/Group 736.svg" alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
