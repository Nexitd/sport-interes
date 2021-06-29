import React from "react";
import { Breadcrumb, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import routes from "../../routing/routes";
import { sportTypes } from "../../Utils/sportTypes";
import { col } from "./utils";
import TourCard from "../../Components/Tournir/Card/TourCard";
import TableScore from "../../Components/TableScore/TableScore";
import logo from "../../assets/images/Turnir/image 22.svg";
import s from "./Tournir.module.css";
import classNames from "classnames";

const TurInfo = [
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
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "20px" }}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={routes.main}>Главная</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link>{sportTypes[type]}</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <h1>{sportTypes[type]}</h1>
      <Row gutter={[10, 0]}>
        <Col span={18}>
          <Row gutter={10}>
            {TurInfo.map((item) => (
              <Col span={12}>
                <TourCard item={item} key={item.id} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={6}>
          <TableScore columns={col} />
        </Col>
        <Col span={18}>
          <Row gutter={15}>
            <Col span={8}>
              <div
                className={classNames([`${type}_border`, s.block])}
                style={{ color: "black" }}
              >
                Следите за другими видами спорта
              </div>
            </Col>
            {Object.keys(sportTypes).map(
              (butt) =>
                butt !== type && (
                  <Col span={8}>
                    <Link to={butt}>
                      <Card
                        hoverable
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
