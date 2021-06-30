import React from 'react'
import { Table } from 'antd';
import s from './History.module.css'

const columns = [
    {
      id: 0,
      dataIndex: 'key',
      width: 20
    },
    {
      title: 'Дата и время',
      dataIndex: 'time',
      width: 150,
    },
    {
      title: 'Сумма вывода',
      dataIndex: 'sum',
      width: 150,
    },
    {
      title: 'Статус операции',
      dataIndex: 'status',
    },
  ];

const data = [];

for (let i = 1; i <= 100; i++) {
  data.push({
    key: i,
    time: `Edward King ${i}`,
    sum: 32,
    status: `London, Park Lane no. ${i}`,
  });
}

const History = () => {
    return (
        <div>
            <h2 className="title">История выплат</h2>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
        </div>
    )
}

export default History;