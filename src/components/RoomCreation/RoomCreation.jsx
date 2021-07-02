import React from 'react'
import { Button, Input } from 'antd'
import s from './RoomCreation.module.css'


const RoomCreation = () => {
    return (
        <div className={s.card}>
            <h2 className="tour__title">Участники комнаты</h2>
                <Input placeholder='Название комнаты' className={s.room__name}/>
                
                <Button hoverable shape='round' style={{display: 'block'}}>
                    Название комнаты
                </Button>

                <p className={s.text}>
                    Прежде чем создать комнату, необходимо отправить приглашения участникам комнаты. 
                </p>
                <p className={s.text}>
                    Без участников группа не может существовать.
                </p>
                <p className={s.text}>
                    В комнате только создатель может управлять количеством участников.
                </p>
        </div>
    )
}

export default RoomCreation;