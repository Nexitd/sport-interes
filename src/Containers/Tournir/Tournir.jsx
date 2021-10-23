import React from "react";
import { Breadcrumb, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import routes from "../../routing/routes";
import { sportTypes } from "../../Utils/sportTypes";
import { col } from "./utils";
import TourCard from "../../Components/Tournir/Card/TourCard";
import TableScore from "../../Components/TableScore/TableScore";
import classNames from "classnames";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  footballEvents,
  footballCountry,
  footballTeams,
  pushFilteredLeagues,
} from "../../store/slices/football";

import logo from "../../assets/images/Turnir/image 22.svg";
import s from "./Tournir.module.css";

export const TurInfo = [
  {
    id: 1,
    img: <img src={logo} alt='' />,
    title: "Лига чемпионов",
    timestamp: 25143252345435,
  },
  {
    id: 2,
    img: <img src={logo} alt='' />,
    title: "Лига чемпионов",
    timestamp: 25143252345435,
  },
  {
    id: 3,
    img: <img src={logo} alt='' />,
    title: "Лига чемпионов",
    timestamp: 25143252345435,
  },
  {
    id: 4,
    img: <img src={logo} alt='' />,
    title: "Лига чемпионов",
    timestamp: 25143252345435,
  },
];

const Tournir = ({ type }) => {
  const dispatch = useDispatch();
  const {
    footballLeague,
    footballCountryes,
    footballTeam,
    filteredLeagues,
  } = useSelector((state) => state.football, shallowEqual);

  useEffect(() => {
    dispatch(footballEvents());
    dispatch(footballCountry());
    dispatch(footballTeams());
  }, [dispatch]);

  const getCountryEvent = (countryId) => {
    Object.keys(footballLeague).forEach((league) => {
      if (
        footballLeague[league].country.id === countryId &&
        league !== "status"
      ) {
        dispatch(pushFilteredLeagues(footballLeague[league]));
      }
    });
  };

  return (
    <div className='content'>
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
          {type === "football" && (
            <Row>
              <Col span={12}>
                <div className={s.gridCont}>
                  <div className={s.rus} onClick={() => getCountryEvent(2)}>
                    <img
                      src='/assets/images/TournirTabs/Group 263 (1).png'
                      alt=''
                    />{" "}
                    <span>Россия</span>
                  </div>
                  <div className={s.it} onClick={() => getCountryEvent(18)}>
                    <img
                      src='/assets/images/TournirTabs/Group 260.png'
                      alt=''
                    />{" "}
                    <span>Италия</span>
                  </div>
                  <div className={s.eng} onClick={() => getCountryEvent(30)}>
                    <img
                      src='/assets/images/TournirTabs/Group 263.png'
                      alt=''
                    />{" "}
                    <span>Англия</span>
                  </div>
                  <div className={s.fr} onClick={() => getCountryEvent(11)}>
                    <img
                      src='/assets/images/TournirTabs/Group 267.png'
                      alt=''
                    />{" "}
                    <span>Франция</span>
                  </div>
                  <div className={s.sp} onClick={() => getCountryEvent(6)}>
                    <img
                      src='/assets/images/TournirTabs/Group 265 (1).png'
                      alt=''
                    />{" "}
                    <span>Испания</span>
                  </div>
                  <div className={s.ger} onClick={() => getCountryEvent(14)}>
                    <img
                      src='/assets/images/TournirTabs/Group 266.png'
                      alt=''
                    />{" "}
                    <span>Германия</span>
                  </div>
                  <div className={s.all} onClick={() => getCountryEvent()}>
                    <img
                      src='/assets/images/TournirTabs/Group 265.png'
                      alt=''
                    />{" "}
                    <span>Все страны</span>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <Row>
                  {filteredLeagues.length !== 0 ? (
                    filteredLeagues.map((index, item) => (
                      <Col span={12} xs={24} lg={12} key={index}>
                        <Link to='/turnir'>
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
                  <Link to='/turnir'>
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
                size='small'
                className={classNames([`${type}_border`, s.blockCard])}>
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
                        size='small'
                        className={classNames([`${butt}_bg`, s.block])}>
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
