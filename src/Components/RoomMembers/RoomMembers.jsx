import React from 'react'
import s from './RoomMembers.module.css'

const RoomMembers = ({ name }) => {
    return (
        <div className={s.card}>
            <span className={s.member}>{name}</span>
            <button>&times;</button>
        </div>
    )
}

export default RoomMembers;