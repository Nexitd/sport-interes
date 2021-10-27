import React from "react";
import { Card, Col, Row, Statistic, Table } from "antd";
import GetMoney from "../../../Components/GetMoney/GetMoney";
import { columnsHistory, data } from "./config";

const Cash = () => {
  return (
    <div>
      <Row gutter={[10, 10]}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Текущий баланс"
              value={1000}
              valueStyle={{ color: "#ff5f23" }}
              suffix="₽"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Выведено средств"
              value={100}
              valueStyle={{ color: "#1779C0" }}
              suffix="₽"
            />
          </Card>
        </Col>
        <Col span={24}>
          <GetMoney />
        </Col>
        <Col span={24}>
          <h2 className="title">История выплат</h2>
          <Table columns={columnsHistory} dataSource={data()} />
        </Col>
      </Row>
    </div>
  );
};

export default Cash;
