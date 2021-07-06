import React from "react";
import { Modal, Input, Button } from "antd";
import s from './Modal.module.css'

const ModalEnter = () => {
    return (
        <div className={s.modal}>
            <h2 className="title">Авторизация</h2>
            <p className={s.modal__text}>Войти через</p>
            <div className={s.modal__enter}>
                <img src="/assets/images/Footer/Group 735.svg" alt="" />
                <img src="/assets/images/Footer/Group 736.svg" alt="" />
            </div>
            <p className={s.modal__text}>Или</p>
            <Input type='email' placeholder='E-mail'/>
            <Input type='password' placeholder='Пароль'/>
            <Button hoverable>Войти</Button>
            <p className={s.modal__acc}>Забыли пароль?</p>
            <p className={s.modal__acc}>Еще не зарегестрированы? <span>Регистрация</span></p>
        </div>
    )
}

const ModalRegistration = () => {
    return (
        <div className={s.modal}>
            <h2 className="title" style={{textAlign: 'center'}}>Регистрация</h2>
            <p className={s.modal__text}>Станьте частью команды уже сейчас!</p>
            <Input type='text' placeholder='Имя, фамилия'/>
            <Input type='email' placeholder='E-mail'/>
            <Input type='text' placeholder='Никнейм'/>
            <Input type='password' placeholder='Пароль'/>
            <Input type='password' placeholder='Повторите пароль'/>
            <Button hoverable>Регистрация</Button>
            <p className={s.modal__acc}>Уже есть аккаунт?</p>
        </div>
    )
};

const ModalRate = () => <div>Reg</div>;

const ModalCustom = ({ visible, type, ...rest }) => {
    const content = () => {
        switch (type) {
            case "reg": {
                return <ModalRegistration />;
            }
            case "rate": {
                return <ModalRate />;
            }
            default: {
                return <ModalEnter />;
            }
        }
    };

    return (
        <Modal visible={visible} {...rest}>
            {content()}
        </Modal>
    );
};

export default ModalCustom;
