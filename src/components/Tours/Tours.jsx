import React from "react";
import { Row, Col, Card, Divider, InputNumber } from "antd";
import { getDate } from "../../utils/date";
import routes from "../../routing/routes";
import s from "./Tours.module.css";

const Tours = ({ game, title }) => {
  return (
    <Col span={24}>
      <p>{title}</p>
      {(game.games || []).map((gamee) => (
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
