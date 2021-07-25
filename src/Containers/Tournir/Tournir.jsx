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
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { useEffect } from "react";
import { footballEvents, footballCountry } from "../../store/slices/football";

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
  const dispatch = useDispatch();
  const { footballLeague, footballCountryes } = useSelector(
    (state) => state.football,
    shallowEqual
  );

  console.log(footballLeague);
  console.log(footballCountryes);

  useEffect(() => {
    dispatch(footballEvents());
    dispatch(footballCountry());
  }, [dispatch]);

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
      <Row gutter={[10, 10]} className={s.blockCenter}>
        <Col span={18}>
          <Row gutter={10}>
            {TurInfo.map((item) => (
              <Col span={12} xs={24} lg={12}>
                <Link to="/turnir">
                  <TourCard item={item} key={item.id} />
                </Link>
              </Col>
            ))}
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
            {Object.keys(sportTypes).map(
              (butt) =>
                butt !== type && (
                  <Col span={8} xs={24} lg={8}>
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
