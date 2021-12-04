import React from "react";
import { Row, Col } from "antd";
import { columns, dataSource } from "../../../components/TableScore/columns";
import TableScore from "../../../components/TableScore/TableScore";

const Tournir = () => {
  return (
    <div className="content">
      <Row gutter={[10, 30]}>
        <Col span={24}>
          <TableScore dataSource={dataSource} columns={columns} />
        </Col>
      </Row>
    </div>
  );
};

export default Tournir;
