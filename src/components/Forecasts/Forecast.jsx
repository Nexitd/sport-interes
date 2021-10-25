import React from "react";
import { Row, Col, Tabs } from "antd";
import { TurInfo } from "../../containers/Tournir/Tournir";
import TourCard from "../Tournir/Card/TourCard";
import s from "./Forecast.module.css";

const Forecast = () => {
  return (
    <Col span={24}>
      <Tabs
        tabBarGutter={0}
        className={s.tabs}
        type="card"
        size="large"
        defaultActiveKey="1"
        centered
      >
        <Tabs.TabPane tab="Футбол" key="1">
          <Row gutter={12}>
            {TurInfo.map((item) => (
              <Col span={12} key={item.id}>
                <TourCard item={item} />
              </Col>
            ))}
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Хоккей" key="3">
          <Row gutter={12}>
            {TurInfo.map((item) => (
              <Col span={12} key={item.id}>
                <TourCard item={item} />
              </Col>
            ))}
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Баскетбол" key="4">
          <Row gutter={12}>
            {TurInfo.map((item) => (
              <Col span={12} key={item.id}>
                <TourCard item={item} />
              </Col>
            ))}
          </Row>
        </Tabs.TabPane>
      </Tabs>
    </Col>
  );
};

export default Forecast;
