import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Space } from "antd";
import { logoutReducer, successOff } from "../../store/slices/auth";
import routes from "../../routing/routes";
import { getDate } from "../../Utils/date";
import ModalCustom from "../../Components/Modal/ModalCustom";
import logo from "../../assets/images/Header/logo_sport 1.svg";
import s from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuth, success } = useSelector((state) => state.auth);
  const [now, setTime] = useState(getDate());
  const [modal, setModal] = useState({ open: false, type: "" });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getDate());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (success) {
      setModal({ open: false, type: "" });
      dispatch(successOff());
    }
  }, [success, dispatch]);

  const logout = () => {
    localStorage.removeItem("access_token");
    dispatch(logoutReducer());
  };

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
              <Button shape="round" onClick={logout}>
                Выйти
              </Button>
            </Space>
          ) : (
            <Space>
              <Button
                type="primary"
                shape="round"
                onClick={() => setModal({ open: true, type: "login" })}
              >
                Войти
              </Button>
              <Button
                shape="round"
                onClick={() => setModal({ open: true, type: "reg" })}
              >
                Регистрация
              </Button>
            </Space>
          )}
        </div>
      </div>
      {modal.open && (
        <ModalCustom
          modal={modal}
          switchType={setModal}
          onCancel={() => setModal({ open: false, type: "" })}
        />
      )}
    </div>
  );
};

export default Header;
