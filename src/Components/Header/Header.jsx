import React from "react";
import logo from './images/logo_sport 1.svg'
import s from "./Header.module.css";
import Button from "../Button/Button";

const Header = () => {
    const getTime = () => {
        let time = new Date();
        let currentTime = time.getHours() + ':' + time.getMinutes();
        
        return currentTime;
    };

    return (
        <div className={s.header}>
            <div className={s.header__container}>
                <div className={s.item}>
                    <img
                        className={s.logo}
                        src={logo}
                        alt=''
                    />
                    <p className={s.time}>{getTime()}</p>
                </div>
                <div className={s.item}>
                    <Button />
                </div>
            </div>
        </div>
    );
};

export default Header;
