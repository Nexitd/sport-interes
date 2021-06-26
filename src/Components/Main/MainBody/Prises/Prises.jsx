import React from 'react'
import s from './Prises.module.css'

const Prises = () => {
    return (
        <div className={s.prises}>
            <h3 className={s.title}>Призы</h3>
            <div className={s.prices__container}>
                <div className={s.prise__item}>
                    <div className={s.price__img}>
                        <img src={'/assets/images/Main/MainBody/Prises/Group 276.png'} alt="" />
                        <img src={'/assets/images/Main/MainBody/Prises/Group 278.png'} alt="" />
                        <img src={'/assets/images/Main/MainBody/Prises/Group 277.png'} alt="" />
                    </div>
                    <p className={s.prise__text}>
                        Победитель по количеству очков 
                        в каждом турнире
                    </p>
                </div>
                <div className={s.prise__item}>
                    <img src={'/assets/images/Main/MainBody/Prises/Group 275.png'} alt="" />
                    <p className={s.prise__text}>
                        Рекордсмен тура 
                        среди всех туров 
                        отдельного турнира
                    </p>
                </div>
                <div className={s.prise__item}>
                    <img src={'/assets/images/Main/MainBody/Prises/Group 274.png'} alt="" />
                    <p className={s.prise__text}>
                        Победитель 
                        по количеству угаданных 
                        счетов в каждом турнире
                    </p>
                </div>
                <div className={s.prise__item}>
                    <img src={'/assets/images/Main/MainBody/Prises/Group 273.png'} alt="" />
                    <p className={s.prise__text}>
                        Лучший прогнозист 
                        на конец года
                    </p>
                </div>
                <div className={s.prise__item}>
                    <img src={'/assets/images/Main/MainBody/Prises/Group 269.png'} alt="" />
                    <p className={s.prise__text}>
                        Победитель 
                        тура
                    </p>
                </div>
            </div>  
        </div>
    );
}

export default Prises;