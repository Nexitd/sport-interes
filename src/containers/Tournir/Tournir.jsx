import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Card, Col, Row } from "antd";
import classNames from "classnames";
import routes from "../../routing/routes";
import { sportTypes } from "../../utils/sportTypes";
import { col } from "./utils";
import { TournirCard } from "../../components";
import TableScore from "../../components/TableScore/TableScore";

import CountriesTabs from "../CountriesTabs/CountriesTabs";

import logo from "../../assets/images/Turnir/image 22.svg";
import s from "./Tournir.module.css";

export const TurInfo = [
  {
    id: 1,
    img: <img src={logo} alt="" />,
    title: "Лига чемпионов",
    timestamp: 25143252345435,
  },
  {
    id: 2,
    img: <img src={logo} alt="" />,
    title: "Лига чемпионов",
    timestamp: 25143252345435,
  },
  {
    id: 3,
    img: <img src={logo} alt="" />,
    title: "Лига чемпионов",
    timestamp: 25143252345435,
  },
  {
    id: 4,
    img: <img src={logo} alt="" />,
    title: "Лига чемпионов",
    timestamp: 25143252345435,
  },
];

const Tournir = ({ type }) => {
  return (
    <div className="content">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={routes.main}>Главная</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link>{sportTypes[type]}</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <h1 className={s.title}>{sportTypes[type]}</h1>

      <Row gutter={[10, 10]} className={s.blockCenter}>
        <Col span={18}>
          <CountriesTabs />
        </Col>
        <Col span={6} xs={24} lg={6}>
          <TableScore columns={col} />
        </Col>
        <Col span={18}>
          <Row gutter={[15, 15]}>
            <Col span={8} xs={24} lg={8}>
              <Card
                hoverable
                size="small"
                className={classNames([`${type}_border`, s.blockCard])}
              >
                Следите за другими видами спорта
              </Card>
            </Col>
            {Object.keys(sportTypes).map(
              (butt, index) =>
                butt !== type && (
                  <Col span={8} xs={24} lg={8} key={index}>
                    <Link to={butt}>
                      <Card
                        hoverable
                        size="small"
                        className={classNames([`${butt}_bg`, s.block])}
                      >
                        {sportTypes[butt]}
                      </Card>
                    </Link>
                  </Col>
                )
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Tournir;
