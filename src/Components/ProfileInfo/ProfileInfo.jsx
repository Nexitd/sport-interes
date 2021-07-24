import React from "react";
import { useSelector } from "react-redux";
import { Col, Card } from "antd";
import ProfileAvatar from "./ProfileAvatar";
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
    const { profile } = useSelector(state => state.auth);
    return (
        <Col span={24}>
            <Card className={styles.profile}>
                <div className={styles.profile__section}>
                    <ProfileAvatar />
                    <div className={styles.profile__info}>
                        <h2 className={styles.name}>{profile.name} {profile.surname}</h2>
                        <p className={styles.reg}><span>Дата регистрации</span> 12 мая 2020 в 13:31</p>
                    </div>
                </div>
                <div className={styles.profile__stats}>
                    <span className={styles.stat}>+230 ₽</span>
                    <p className={styles.stat__info}>Текущий баланс</p>

                    <span className={styles.stat}>457</span>
                    <p className={styles.stat__info}>Сделано прогнозов</p>
                </div>
            </Card>
        </Col>
    )
}

export default ProfileInfo;