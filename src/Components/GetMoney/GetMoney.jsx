import React from 'react'
import { Button, Input } from 'antd'
import s from './GetMoney.module.css'

const GetMoney = () => {
    return (
        <div className={s.container}>
            <p className={s.text}>
                 Для вывода средст необходимо указать сумму вывода.
                Средства будут отправлены на карту “Сбербанка”, прикрепленную к номеру,  который Вы указали при регистрации.
            </p>
            <Input placeholder='Сумма вывода, руб.'/>
            <div className={s.section}>
                <input id='check' type="checkbox" />
                <label htmlFor="check">
                    Я согласен с условиями вывода средства 
                    и обработку личных данных.
                </label>
            </div>
            <Button hoverble shape='round'>Вывести</Button>
        </div>
    )
}

export default GetMoney;