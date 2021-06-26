import React, { useState, useEffect } from "react";
import logo from "../../assets/images/Header/logo_sport 1.svg";
import s from "./Header.module.css";
import Button from "../Button/Button";

const Header = () => {
        const [now, setTime] = useState(new Date());
    
        useEffect(() => {
            const timer = setInterval(() => {
                setTime(new Date());
            }, 1000);
            return () => {
                clearInterval(timer);
            };
        }, []);
    
        let time = now.toLocaleTimeString();

    return (
        <div className={s.header}>
            <div className={s.header__container}>
                <div className={s.item}>
                    <img className={s.logo} src={logo} alt='' />
                    <p className={s.time}>{time}</p>
                </div>
                <div className={s.item}>
                    <Button id="bg" value="Личный кабинет"/>
                    <Button id="active" value="Войти"/>
                </div>
            </div>
        </div>
    );
};

export default Header;
