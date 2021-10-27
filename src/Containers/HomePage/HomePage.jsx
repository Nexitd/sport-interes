import { Col, Row } from "antd";
import React from "react";
import MainHeader from "../../Components/Main/MainHeader/MainHeader";
import MainTournir from "../../Components/Main/MainTournir/MainTournir";
import Points from "../../Components/Main/Points/Point";
import Prises from "../../Components/Main/Prises/Prises";
import Rules from "../../Components/Main/Rules/Rules";
import TableScore from "../../Components/TableScore/TableScore";
import s from './HomePage.module.css'

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
            <TableScore />
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
