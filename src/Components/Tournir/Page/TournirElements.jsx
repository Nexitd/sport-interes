import React from 'react'
import Repeat from '../RepeatElements/Repeat'
import s from './TournirElements.module.css'


const TournirElements = () => {
    return (
        <div className={s.content}>
            <div className={s.content__item}>
                
                <Repeat id="country__turnir"/>
            </div>
            <div className={s.content__item}>
                <Repeat id="world__turnir" title="Международный турнир"/>
            </div>
        </div>
    );
};

export default TournirElements;