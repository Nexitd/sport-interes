import React from 'react';
import CountryTurnir from './CountryTurnir/CountryTurnir';
import logo from '../../../assets/images/Turnir/image 22.svg'
import s from './Repeat.module.css';

const TurInfo = [
    {
        id: 1,
        img: <img src={logo} alt="" />,
        title: 'Лига чемпионов',
        date: '22 мая',
        time: '12:45'
    },

    {
        id: 2,
        img: <img src={logo} alt="" />,
        title: 'Лига чемпионов',
        date: '22 мая',
        time: '12:45'
    },
    
    {
        id: 3,
        img: <img src={logo} alt="" />,
        title: 'Лига чемпионов',
        date: '22 мая',
        time: '12:45'
    },

    {
        id: 4,
        img: <img src={logo} alt="" />,
        title: 'Лига чемпионов',
        date: '22 мая',
        time: '12:45'
    }

];

const Repeat = ({title ='Турниры Италии', id}) => {
    return (
        <div className={s.content} id={id}>
            <div className={s.turnir}>
                <h2 className={s.title}>{title}</h2>
                {TurInfo.map((info) => (
                    <CountryTurnir img={info.img} title={info.title} date={info.date} time={info.time} />
                ))}
            </div>
        </div>
    );
}

export default Repeat;