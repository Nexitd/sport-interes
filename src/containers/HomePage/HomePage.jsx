import { Col, Row } from "antd";
import React from "react";
import MainHeader from "../../components/Main/MainHeader/MainHeader";
import MainTournir from "../../components/Main/MainTournir/MainTournir";
import Points from "../../components/Main/Points/Point";
import Prises from "../../components/Main/Prises/Prises";
import Rules from "../../components/Main/Rules/Rules";
import TableScore from "../../components/TableScore/TableScore";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <MainHeader />
      <div className="content">
        <Prises />
        <Row gutter={[10, 30]} className={s.homePage}>
          <Col span={18} xs={24} lg={18}>
            <MainTournir />
          </Col>
          <Col span={6} xs={24} lg={6}>
            <TableScore title="ТОП прогнозисты" btnText="Все прогнозисты" />
          </Col>
          <Col span={18} xs={20} lg={18}>
            <Points />
          </Col>
          <Col span={18} xs={20} lg={18}>
            <Rules />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomePage;
