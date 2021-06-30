import React from 'react'
import { Row, Col } from 'antd'
import edit from '../../assets/images/RoomCard/edit 9.svg'
import inf from '../../assets/images/RoomCard/Group 490.svg'
import s from './RoomCard.module.css'

const RoomInfo = [
    {
        id: 0,
        title: 'Адские псы',
        edit: <img src={edit} alt="edit" />,
        moreInf: <img src={inf} alt="info" />,
        members: 23
    },
    {
        id: 1,
        title: 'Спорт',
        edit: <img src={edit} alt="edit" />,
        moreInf: <img src={inf} alt="info" />,
        members: 24
    },
    {
        id: 2,
        title: 'Писька',
        edit: <img src={edit} alt="edit" />,
        moreInf: <img src={inf} alt="info" />,
        members: 2
    },
    {
        id: 3,
        title: 'З О Ж',
        edit: <img src={edit} alt="edit" />,
        moreInf: <img src={inf} alt="info" />,
        members: 3
    }
]

const RoomCard = () => {
    return (
        <Col span={24}>
            <Row>
                {RoomInfo.map(info => (
                    <Col span={24}>
                        <div className={s.card}>
                            <div className={s.section}>
                                <button>
                                    {info.edit}
                                </button>
                                <span className={s.name}>{info.title}</span>
                            </div>
                            <div className={s.section}>
                                <span className={s.members}>{info.members} участника</span>
                                <button>
                                    {info.moreInf}
                                </button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Col>
    )
}

export default RoomCard;