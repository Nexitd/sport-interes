import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Space } from "antd";
import routes from "../../routing/routes";
import { getDate } from "../../Utils/Date";
import ModalCustom from "../../Components/Modal/ModalCustom";
import logo from "../../assets/images/Header/logo_sport 1.svg";
import s from "./Header.module.css";

const Header = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const [now, setTime] = useState(getDate());
  const [modalAuth, setModalAuth] = useState(false);
  const [modalReg, setModalReg] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getDate());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={s.header}>
      <div className={s.header__container}>
        <div className={s.item}>
          <Link to={routes.main}>
            <img className={s.logo} src={logo} alt="" />
          </Link>
          <span className={s.time}>{now}</span>
        </div>
        <div className={s.item}>
          {isAuth ? (
            <Space>
              <Link to={routes.profile}>
                <Button type="primary" shape="round">
                  Личный кабинет
                </Button>
              </Link>
              <Button shape="round">Выйти</Button>
            </Space>
          ) : (
            <Space>
              <Button
                type="primary"
                shape="round"
                onClick={() => setModalAuth(true)}
              >
                Войти
              </Button>
              <Button shape="round" onClick={() => setModalReg(true)}>
                Регистрация
              </Button>
            </Space>
          )}
        </div>
      </div>
      <ModalCustom visible={modalAuth} onCancel={() => setModalAuth(false)} />
      <ModalCustom
        visible={modalReg}
        onCancel={() => setModalReg(false)}
        type="reg"
      />
    </div>
  );
};

export default Header;
