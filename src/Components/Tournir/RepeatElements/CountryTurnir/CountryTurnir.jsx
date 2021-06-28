import React from 'react';
import s from './CountryTurnir.module.css';

const CountryTurnir = ({ img, title, date, time }) => {
    return (
        <div className={s.card}>
            <div className={s.section}>
                {img}
                <h3 className={s.title}>{title}</h3>
            </div>
            <div className={s.section}>
                <span className={s.text}>{date}</span>
                <span className={s.text}>{time}</span>
            </div>
        </div>
    )
}

export default CountryTurnir;