import React from "react";
import { Row, Tabs, Col, Button, Input, List, Typography, Card } from "antd";
import TournirTabs from "../../../components/TournirTabs/TournirTabs";
import TourCard from "../../../components/Tournir/Card/TourCard";
import { TurInfo } from "../../Tournir/Tournir";
import s from "./CreateRoom.module.css";
import RoomMembers from "../../../components/RoomMembers/RoomMembers";
import { list } from "./config";

const TabsInfo = [
  {
    id: 0,
    name: "Россия",
    img: (
      <img src="/assets/images/TournirTabs/Group 263 (1).png" alt="Россия" />
    ),
  },
  {
    id: 1,
    name: "Италия",
    img: <img src="/assets/images/TournirTabs/Group 260.png" alt="Италия" />,
  },
  {
    id: 2,
    name: "Англия",
    img: <img src="/assets/images/TournirTabs/Group 263.png" alt="Англия" />,
  },
  {
    id: 3,
    name: "Франция",
    img: <img src="/assets/images/TournirTabs/Group 267.png" alt="Франция" />,
  },
  {
    id: 4,
    name: "Испания",
    img: (
      <img src="/assets/images/TournirTabs/Group 265 (1).png" alt="Испания" />
    ),
  },
  {
    id: 5,
    name: "Германия",
    img: <img src="/assets/images/TournirTabs/Group 266.png" alt="Германия" />,
  },
  {
    id: 6,
    name: "Все страны",
    img: (
      <img src="/assets/images/TournirTabs/Group 265.png" alt="Все страны" />
    ),
  },
];

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

let RoomTabs = [];

const CreateRoom = () => {
  TabsInfo.forEach((item) => {
    if (item.id < 6) {
      RoomTabs.push(item);
    }
  });

  return (
    <Row gutter={[10, 30]}>
      <Row className={s.tour__select}>
        <Typography.Title level={2}>Выбрать турнир</Typography.Title>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Футбол" key="1">
            <div className={s.all__countries}>
              <label htmlFor="all" className={s.select__all}>
                Выбрать все страны
              </label>
              <input type="checkbox" id="all" />
            </div>
            <Row style={{ marginBottom: "40px" }}>
              {RoomTabs.map((info) => (
                <TournirTabs key={info.id} name={info.name} img={info.img} />
              ))}
            </Row>
            <Row gutter={[10, 30]}>
              <Col span={12}>
                <h2 className={s.tour__title}>Турниры Италии</h2>
                {TurInfo.map((item) => (
                  <Col span={24} key={item.id}>
                    <TourCard item={item} />
                  </Col>
                ))}
              </Col>
              <Col span={12}>
                <h2 className={s.tour__title}>Международные турниры</h2>
                {TurInfo.map((item) => (
                  <Col span={24} key={item.id}>
                    <TourCard item={item} />
                  </Col>
                ))}
              </Col>
            </Row>
            <Button
              shape="round"
              style={{ margin: "20px auto", display: "block" }}
            >
              Добавить турнир в комнату
            </Button>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Хоккей" key="2">
            <div className={s.all__countries}>
              <label htmlFor="all" className={s.select__all}>
                Выбрать все страны
              </label>
              <input type="checkbox" id="all" />
            </div>
            <Row style={{ marginBottom: "40px" }}>
              {RoomTabs.map((info) => (
                <TournirTabs key={info.id} name={info.name} img={info.img} />
              ))}
            </Row>
            <Row gutter={[10, 30]}>
              <Col span={12}>
                <h2 className={s.tour__title}>Турниры Италии</h2>
                {TurInfo.map((item) => (
                  <Col span={24} key={item.id}>
                    <TourCard item={item} />
                  </Col>
                ))}
              </Col>
              <Col span={12}>
                <h2 className={s.tour__title}>Международные турниры</h2>
                {TurInfo.map((item) => (
                  <Col span={24} key={item.id}>
                    <TourCard item={item} />
                  </Col>
                ))}
              </Col>
            </Row>
            <Button
              shape="round"
              style={{ margin: "20px auto", display: "block" }}
            >
              Добавить турнир в комнату
            </Button>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Баскетбол" key="3">
            <div className={s.all__countries}>
              <label htmlFor="all" className={s.select__all}>
                Выбрать все страны
              </label>
              <input type="checkbox" id="all" />
            </div>
            <Row style={{ marginBottom: "40px" }}>
              {RoomTabs.map((info) => (
                <TournirTabs key={info.id} name={info.name} img={info.img} />
              ))}
            </Row>
            <Row gutter={[10, 30]}>
              <Col span={12}>
                <h2 className={s.tour__title}>Турниры Италии</h2>
                {TurInfo.map((item) => (
                  <Col span={24} key={item.id}>
                    <TourCard item={item} />
                  </Col>
                ))}
              </Col>
              <Col span={12}>
                <h2 className={s.tour__title}>Международные турниры</h2>
                {TurInfo.map((item) => (
                  <Col span={24} key={item.id}>
                    <TourCard item={item} />
                  </Col>
                ))}
              </Col>
            </Row>
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
