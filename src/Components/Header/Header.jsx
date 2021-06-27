import { Button, Space } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ModalCustom from "../Modal/ModalCustom";
import logo from "../../assets/images/Header/logo_sport 1.svg";
import s from "./Header.module.css";

const Header = () => {
    const { isAuth } = useSelector((state) => state.auth);
    const [now, setTime] = useState(new Date());
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={s.header}>
            <div className={s.header__container}>
                <div className={s.item}>
                    <img className={s.logo} src={logo} alt='' />
                    <span className={s.time}>
                        {now.toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            timeZoneName: "short",
                            hour12: false,
                        })}
                    </span>
                </div>
                <div className={s.item}>
                    {isAuth ? (
                        <Space>
                            <Button type='primary' shape='round'>
                                Личный кабинет
                            </Button>
                            <Button shape='round'>Выйти</Button>
                        </Space>
                    ) : (
                        <Space>
                            <Button type='primary' shape='round'>
                                Войти
                            </Button>
                            <Button
                                shape='round'
                                onClick={() => setModal(true)}>
                                Регистраиця
                            </Button>
                        </Space>
                    )}
                </div>
            </div>
            <ModalCustom visible={modal} onCancel={() => setModal(false)} />
        </div>
    );
};

export default Header;
