import React from 'react'
import { Row } from 'antd'
import InviteCard from '../../Components/InviteCard/InviteCard'

const MyRooms = () => {
    return (
        <div>
            <Row gutter={[10, 30]}>
                <InviteCard />
            </Row>
        </div>
    )
}

export default MyRooms;