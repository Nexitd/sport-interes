import React from "react";
import { Row, Col, Tabs } from "antd";
import MyRooms from "./MyRooms/MyRooms";
import Invites from "./Invites/Invites";
import CreateRoom from "./CreateRoom/CreateRoom";
import s from "./Rooms.module.css";
import Add from "../../Components/Add/Add";

const Rooms = () => {
  return (
    <div className="content">
      <Row justify="center" gutter={[10, 30]}>
        <Col span={18}>
          <h2 className="title">Комнаты</h2>
          <Tabs
            tabBarGutter={0}
            className={s.tabs}
            type="card"
            size="large"
            defaultActiveKey="1"
            centered
          >
            <Tabs.TabPane tab="Мои комнаты" key="1">
              <MyRooms />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Мои приглашения" key="3">
              <Invites />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Создать комнату" key="4">
              <CreateRoom />
            </Tabs.TabPane>
          </Tabs>
        </Col>
        <Col span={6}>
          <Add />
          <Add />
        </Col>
      </Row>
    </div>
  );
};

export default Rooms;
