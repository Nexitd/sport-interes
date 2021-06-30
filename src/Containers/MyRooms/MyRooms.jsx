import React from 'react'
import { Row } from 'antd'
import RoomCard from '../../Components/RoomCard/RoomCard'

const MyRooms = () => {
    return (
        <div>
            <Row gutter={[10, 30]}>
                <RoomCard />
            </Row>
        </div>
    )
}

export default MyRooms;