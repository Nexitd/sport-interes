import React from 'react'
import s from './Button.module.css'

const Button = (props) => {
    return (
        <div>
            <button className={s.btn + ' ' + s.bg} >Личный кабинет</button>
            <button className={s.btn + ' ' + s.active} >Войти</button>
        </div>
    );
}

export default Button;