import React from "react";
import { Table, Button, Row } from "antd";
import { col } from "./columns";
import s from "./TableScore.module.css";

const TableScore = ({ title, btnText, columns = col, data = [] }) => (
  <Row className={s.tableContainer} justify="center" gutter={[0, 10]}>
    {title && <h3 className={s.table__title}>{title}</h3>}
    <Table className={s.table} columns={columns} dataSource={data} />
    {btnText && (
      <Button shape="round" size="large" className={s.all__prognosises}>
        {btnText}
      </Button>
    )}
  </Row>
);

export default TableScore;
