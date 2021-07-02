import React from 'react'
import { Row, Col, Button } from 'antd'
import s from './InviteCard.module.css'





const InviteCard = ({date, time, name, title}) => {
    return ( 
        <Col span={24}>
            <div className={s.card}>
                <div className={s.section}>
                    <span>{date}</span>
                    <span>{time}</span>
                </div>
                <div className={s.cont}> 
                    <p className={s.invite}>
                        <span className={s.name}>{name}</span> приглашает вас в комнату 
                        <span className={s.room}>{title}</span>
                    </p>   
                </div>
                <div className={s.section}>
                    <Button shape='round' className={s.card__button}>Принять</Button>
                    <Button shape='round' className={s.card__button}>Отклонить</Button>
                </div>
            </div>
        </Col>
    )
}

export default InviteCard;