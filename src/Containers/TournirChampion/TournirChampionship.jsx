import React from 'react'
import { Row, Col, Tabs } from 'antd'
import Add from '../../Components/Add/Add'
import Tournir from './Tournir/Tournir'
import Timetable from './Timetable/Timetable'
import s from './Tournir.module.css'


const TournirChampionship = () => {
    return (
        <div className="content">
            <Row>
                <Col span={18}>
                <h2 className="title">Англия - Чемпионат</h2>
                <Tabs
                    tabBarGutter={0}
                    className={s.tabs}
                    type="card"
                    size="large"
                    defaultActiveKey="1"
                    centered
                >
                    <Tabs.TabPane tab="Турниры" key="1">
                        <Tournir />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Расписание" key="3">
                        <Timetable />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Результаты" key="4">
                    
                    </Tabs.TabPane>
                </Tabs>
            </Col>
            <Col span={6}>
                <Add />
                <Add />
            </Col>
            </Row>
        </div>
    )
}

export default TournirChampionship;
