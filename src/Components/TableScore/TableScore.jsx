import React from "react";
import { Table, Button, Row } from "antd";
import { col } from "./columns";
import s from "./TableScore.module.css";

const TableScore = ({
  title = "ТОП прогнозисты",
  btnText = "Все прогнозисты",
  columns = col,
  data = [],
}) => (
  <Row className={s.table} justify="center" gutter={[0, 10]}>
    <h3 className={s.table__title}>{title}</h3>
    <Table columns={columns} dataSource={data} />
    <Button shape="round" size="large" className={s.all__prognosises}>{btnText}</Button>
  </Row>
);

export default TableScore;
