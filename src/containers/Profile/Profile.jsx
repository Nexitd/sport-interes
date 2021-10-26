import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { Col, Row, Tabs } from "antd";
import routes from "../../routing/routes";
import Settings from "./Settings/Settings";
import Cash from "./Cash/Cash";
import { Advertising } from "../../components";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

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
              <ProfileInfo />
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
          <Advertising />
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
