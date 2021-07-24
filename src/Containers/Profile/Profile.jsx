import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { Col, Row, Tabs } from "antd";
import routes from "../../routing/routes";
import Settings from "./Settings/Settings";
import Cash from "../WithdrawalCash/Cash";
import Add from "../../Components/Add/Add";
import s from "./Profile.module.css";
import ProfileInfo from "../../Components/ProfileInfo/ProfileInfo";
import Achivements from "../../Components/Achivements/Achivements";
import Statistic from "../../Components/Statistic/Statistic";
import Forecast from "../../Components/Forecasts/Forecast";
import Tours from "../../Components/Tours/Tours";

const Profile = () => {
  const { isAuth } = useSelector((state) => state.auth);

  if (!isAuth) {
    return <Redirect to={routes.main} />;
  }

  return (
    <div className="content">
      <Row justify="center" gutter={[10, 30]}>
        <Col span={18}>
          <Tabs
            tabBarGutter={0}
            className={s.tabs}
            type="card"
            size="large"
            defaultActiveKey="1"
            centered
          >
            <Tabs.TabPane tab="Профиль" key="1">
              <Row gutter={[10, 30]}>
                <ProfileInfo />
                <Achivements />
                <Statistic />
                <Forecast />
                <Tours title="29-й тур" />
                <Tours title="30-й тур" />
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <Link className={s.link} to={routes.rooms}>
                  Комнаты
                </Link>
              }
              key="2"
            />
            <Tabs.TabPane tab="Вывод средств" key="3">
              <Cash />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Настройки" key="4">
              <Settings />
            </Tabs.TabPane>
          </Tabs>
        </Col>
        <Col span={6}>
          <Add />
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
