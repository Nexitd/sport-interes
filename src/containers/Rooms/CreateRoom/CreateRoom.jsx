import React from "react";
import { Row, Tabs, Col, Button, Input, List, Typography, Card } from "antd";
import TournirTabs from "../../../components/TournirTabs/TournirTabs";
import s from "./CreateRoom.module.css";
import RoomMembers from "../../../components/RoomMembers/RoomMembers";
import { list } from "./config";
import CountriesTabs from "../../CountriesTabs/CountriesTabs";

const Members = [
  {
    id: 0,
    name: "Сергей",
  },
  {
    id: 1,
    name: "Владимирович Максим",
  },
  {
    id: 2,
    name: "Потапенко12",
  },
  {
    id: 3,
    name: "АСРК",
  },
  {
    id: 4,
    name: "Сергей4567 ",
  },
  {
    id: 5,
    name: "Сергей",
  },
];

const CreateRoom = () => {
  return (
    <Row gutter={[10, 30]}>
      <Row className={s.tour__select}>
        <Typography.Title level={2}>Выбрать турнир</Typography.Title>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Футбол" key="1">
            <CountriesTabs />
            <Button
              shape="round"
              style={{ margin: "20px auto", display: "block" }}
            >
              Добавить турнир в комнату
            </Button>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Хоккей" key="2">
            <Button
              shape="round"
              style={{ margin: "20px auto", display: "block" }}
            >
              Добавить турнир в комнату
            </Button>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Баскетбол" key="3">
            <Button
              shape="round"
              style={{ margin: "20px auto", display: "block" }}
            >
              Добавить турнир в комнату
            </Button>
          </Tabs.TabPane>
        </Tabs>
      </Row>
      <Col span={12}>
        <Card>
          <Typography.Title level={2}>Участники комнаты</Typography.Title>
          <Input placeholder="Имя участника" className={s.member__name} />
          {Members.map((member) => (
            <RoomMembers key={member.id} name={member.name} />
          ))}
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Typography.Title level={2}>Название комнаты</Typography.Title>
          <Input placeholder="Название комнаты" className={s.room__name} />
          <List
            size="small"
            header={null}
            footer={null}
            dataSource={list}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default CreateRoom;
