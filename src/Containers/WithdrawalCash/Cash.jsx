import React from 'react'
import { Col, Row } from 'antd'
import Balance from '../../Components/Balance/Balance'
import GetMoney from '../../Components/GetMoney/GetMoney'
import History from '../../Components/OperationHistory/History.jsx'

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
                <Col span={24}>
                    <History />
                </Col>
            </Row>
        </div>
    )
}

export default Cash;