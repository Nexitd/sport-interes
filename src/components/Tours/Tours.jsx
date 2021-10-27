import React from "react";
import { Row, Col, Card, Divider, InputNumber } from "antd";
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

const Tours = ({ game, title }) => {
  console.log(title, game);
  return (
    <Col span={24}>
      <p>{title}</p>
      {(game.games || []).map(gamee => (
        <Card key={gamee.id}>
          <Row justify="space-between" style={{ padding: "0 45px" }}>
            <Col>12/12</Col>
            <Divider
              type="vertical"
              style={{ backgroundColor: "#000", height: "auto" }}
            />
            <Col>{gamee.team1.name}</Col>
            <Col>
            <InputNumber />
            <InputNumber />
            </Col>
            <Col>{gamee.team2.name}</Col>
            <Divider
              type="vertical"
              style={{ backgroundColor: "#000", height: "auto" }}
            />
            <Col>+4</Col>
          </Row>
        </Card>
      ))}
      
    </Col>
  );
};

export default Tours;
