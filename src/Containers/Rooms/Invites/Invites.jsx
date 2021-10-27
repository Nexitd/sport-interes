import React from "react";
import { Button, Card, Col, Row } from "antd";

const InviteInfo = [
  {
    id: 0,
    title: "Адские псы",
    name: "Сергей",
    date: "22.04.2021 14:12",
  },
  {
    id: 1,
    title: "Адские псы",
    name: "Сергей",
    date: "22.04.2021 14:12",
  },
  {
    id: 2,
    title: "Адские псы",
    name: "Сергей",
    date: "22.04.2021 14:12",
  },
  {
    id: 3,
    title:
      " Название комнаты если оно очень длинное Название комнаты если оно очень длинное Название комнаты если оно очень длинное Название комнаты если оно очень длинное ",
    name: "Сергей",
    date: "22.04.2021 14:12",
  },
];

const MyRooms = () => {
  return (
    <div>
      <Row gutter={[10, 30]}>
        {InviteInfo.map((info) => (
          <Card size="small">
            <Row align="middle">
              <Col span={5}>
                <span>{info.date}</span>
              </Col>
              <Col span={14}>
                <span>{info.name}</span> приглашает вас в комнату
                <span>{info.title}</span>
              </Col>
              <Col span={5}>
                <Button shape="round" block>
                  Принять
                </Button>
                <Button shape="round" block>
                  Отклонить
                </Button>
              </Col>
            </Row>
          </Card>
        ))}
      </Row>
    </div>
  );
};

export default MyRooms;
