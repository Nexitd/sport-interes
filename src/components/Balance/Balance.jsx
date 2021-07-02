import React from 'react'
import { Row, Col } from 'antd'
import classNames from 'classnames'
import s from './Balance.module.css'

const BalanceInfo = [
    {
        id: 0,
        text: 'Текущий баланс',
        money: '2300 ₽',
        color: 'basketball'
    },
    
    {
        id: 1,
        text: 'Выведено средств',
        money: '1300 ₽',
        color: 'hockey'
    }
]

const Balance = () => {
    return (
        <div>
            <Row gutter={12}>
                {BalanceInfo.map(info => (
                    <Col span={12} key={info.id}>
                        <div className={s.item}>
                            <h5 className={s.text}>{info.text}</h5>
                            <span className={classNames([s.money, [info.color]])}>{info.money}</span>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Balance;