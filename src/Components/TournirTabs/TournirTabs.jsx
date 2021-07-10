import React from 'react'
import { Col } from 'antd';
import s from './TournirTabs.module.css'



const TournirTabs = ({ name, img }) => {
    return (
        <Col span={8} className={s.tab + ' active'} xs={24}>
            {img}
            <span className={s.title}>{name}</span>
        </Col>
    )
}

export default TournirTabs;