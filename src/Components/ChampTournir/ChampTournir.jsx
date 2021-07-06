import React from 'react'
import { Table } from 'antd';
import s from './ChampTournir.module.css'


const ChampTournir = ({ dataSource, columns }) => {
    return (
        <Table dataSource={dataSource} columns={columns} className={s.table}/>
    )
}

export default ChampTournir;