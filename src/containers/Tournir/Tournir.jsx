import React from "react";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Breadcrumb, Card, Col, Row } from "antd";
import classNames from "classnames";
import routes from "../../routing/routes";
import { sportTypes } from "../../utils/sportTypes";
import { col } from "./utils";
import TourCard from "../../components/Tournir/Card/TourCard";
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
  const { footballLeague, filteredLeagues } = useSelector(
    (state) => state.football,
    shallowEqual
  );

  return (
    <div className="content">
      <Breadcrumb className={s.blockLeft}>
        <Breadcrumb.Item>
          <Link to={routes.main}>Главная</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link>{sportTypes[type]}</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <h1 className={s.title}>{sportTypes[type]}</h1>

      <CountriesTabs />
      <Row gutter={[10, 10]} className={s.blockCenter}>
        <Col span={18}>
          {type === "football" && (
            <Row>
              <Col span={12}>
                <Row>
                  {filteredLeagues.length !== 0 ? (
                    filteredLeagues.map((index, item) => (
                      <Col span={12} xs={24} lg={12} key={index}>
                        <Link to="/turnir">
                          <TourCard item={footballLeague[item]} />
                        </Link>
                      </Col>
                    ))
                  ) : (
                    <p>There no data</p>
                  )}
                </Row>
              </Col>
            </Row>
          )}

          <Row gutter={10}>
            {Object.keys(footballLeague).map((item, index) => {
              return (
                <Col span={12} xs={24} lg={12} key={index}>
                  <Link to="/turnir">
                    <TourCard item={footballLeague[item]} />
                  </Link>
                </Col>
              );
            })}
          </Row>
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
            {Object.keys(sportTypes).map((butt, index) => {
              return (
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
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Tournir;
