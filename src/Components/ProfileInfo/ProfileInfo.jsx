import React from "react";
import { Col, Card } from "antd";
import avatar from '../../assets/images/profilePage/Group 538.png'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <Col span={24}>
            <Card className={s.profile}>
                <div className={s.profile__section}>
                <img src={avatar} alt="" />
                <div className={s.profile__info}>
                    <h2 className={s.name}>Александр Петров</h2>
                    <p className={s.reg}><span>Дата регистрации</span> 12 мая 2020 в 13:31</p>
                </div>
                </div>
                <div className={s.profile__stats}>
                <span className={s.stat}>+230 ₽</span>
                <p className={s.stat__info}>Текущий баланс</p>

                <span className={s.stat}>457</span>
                <p className={s.stat__info}>Сделано прогнозов</p>
                </div>
            </Card>
        </Col>
    )
}

export default ProfileInfo;