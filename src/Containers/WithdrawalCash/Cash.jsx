import React from 'react'
import Balance from '../../Components/Balance/Balance'
import GetMoney from '../../Components/GetMoney/GetMoney'
import { Col, Row } from 'antd'


const Cash = () => {
    return (
        <div>
            <Row gutter={[23, 23]}>
                <Col span={24}>
                    <Balance />
                </Col>
                <Col span={24}>
                    <GetMoney />
                </Col>
            </Row>
        </div>
    )
}

export default Cash;