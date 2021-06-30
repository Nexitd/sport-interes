import React from 'react'
import { Row, Col, Button } from 'antd'
import s from './InviteCard.module.css'


const InviteInfo = [
    {
        id: 0,
        title: 'Адские псы',
        name: 'Сергей',
        date: '22.04.2021',
        time: '14:12'
    },
    {
        id: 1,
        title: 'Адские псы',
        name: 'Сергей',
        date: '22.04.2021',
        time: '14:12'
    },
    {
        id: 2,
        title: 'Адские псы',
        name: 'Сергей',
        date: '22.04.2021',
        time: '14:12'
    },
    {
        id: 3,
        title: 'Адские псы',
        name: 'Сергей',
        date: '22.04.2021',
        time: '14:12'
    }
]


const InviteCard = () => {
    return ( 
        <Col span={24}>
            <Row>
                {InviteInfo.map(info => (
                    <Col span={24}>
                        <div className={s.card}>
                            <div className={s.section}>
                                <span>{info.date}</span>
                                <span>{info.time}</span>
                            </div>
                            <div className> 
                                <p>
                                    <span className={s.name}>{info.name}</span> приглашает вас в комнату 
                                    <span className={s.room}>{info.title}</span>
                                </p>   
                            </div>
                            <div className={s.section}>
                                <Button shape='round' className={s.card__button}>Принять</Button>
                                <Button shape='round' className={s.card__button}>Отклонить</Button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Col>
    )
}

export default InviteCard;