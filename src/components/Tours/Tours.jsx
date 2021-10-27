import React from "react";
import { Row, Col, Card, Divider } from "antd";
import { Link } from "react-router-dom";
import { getDate } from "../../utils/date";
import routes from "../../routing/routes";
import s from "./Tours.module.css";

const TourInfo = [
  {
    id: 0,
    time: 25143252345435,
    firstComand: "Челси",
    secondComand: "Ман Сити",
    firstImg: <img src="/assets/images/Tour/image 27.svg" alt="command" />,
    secondImg: <img src="/assets/images/Tour/image 27.svg" alt="command" />,
    firstScore: 0,
    secondScore: 3,
    point: "+5",
  },
  {
    id: 1,
    time: 25143252345435,
    firstComand: "Челси",
    secondComand: "Ман Сити",
    firstImg: <img src="/assets/images/Tour/image 27.svg" alt="command" />,
    secondImg: <img src="/assets/images/Tour/image 27.svg" alt="command" />,
    firstScore: 0,
    secondScore: 3,
    point: "+5",
  },
  {
    id: 2,
    time: 25143252345435,
    firstComand: "Челси",
    secondComand: "Ман Сити",
    firstImg: <img src="/assets/images/Tour/image 27.svg" alt="command" />,
    secondImg: <img src="/assets/images/Tour/image 27.svg" alt="command" />,
    firstScore: 0,
    secondScore: 3,
    point: "+5",
  },
  {
    id: 3,
    time: 25143252345435,
    firstComand: "Челси",
    secondComand: "Ман Сити",
    firstImg: <img src="/assets/images/Tour/image 27.svg" alt="command" />,
    secondImg: <img src="/assets/images/Tour/image 27.svg" alt="command" />,
    firstScore: 0,
    secondScore: 3,
    point: "+5",
  },
  {
    id: 4,
    time: 25143252345435,
    firstComand: "Челси",
    secondComand: "Ман Сити",
    firstImg: <img src="/assets/images/Tour/image 27.svg" alt="command" />,
    secondImg: <img src="/assets/images/Tour/image 27.svg" alt="command" />,
    firstScore: 0,
    secondScore: 3,
    point: "+5",
  },
];

const Tours = ({
  title,
  timestamp = TourInfo.time,
  firstScore = "",
  secondScore = "",
  match,
  point,
  ...rest
}) => {
  return (
    <Col span={24}>
      <Card>
        <Row>
          <Col>12/12</Col>
          <Divider
            type="vertical"
            style={{ backgroundColor: "#000", height: "auto" }}
          />
          <Col>Chelsi Man Citi</Col>
          <Divider
            type="vertical"
            style={{ backgroundColor: "#000", height: "auto" }}
          />
          <Col>+4</Col>
        </Row>
      </Card>
      <h3 className={s.title}>{title}</h3>
      <Row gutter={[0, 10]}>
        {TourInfo.map((info) => (
          <Col span={24} key={info.id}>
            <Link to={routes.matches}>
              <Card className={s.tour} hoverable>
                <div className={s.time}>
                  <span className={s.tour__time}>
                    {getDate(timestamp, {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: false,
                    })}
                  </span>
                </div>
                <div className={s.comands}>
                  <p className={s.command__name}>{info.firstComand}</p>
                  {info.firstImg}
                  <input className={s.tour__score} />
                  <input className={s.tour__score} />
                  {info.secondImg}
                  <p className={s.command__name}>{info.secondComand}</p>
                </div>
                <div className={s.score}>
                  {rest.predictionScore1}
                  {rest.predictionScore2}
                  {rest.predict}
                </div>
                <div className={s.points}>
                  <span className={s.tour__point}>{point}</span>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default Tours;
