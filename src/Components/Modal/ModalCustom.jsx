import React, { useState } from "react";
import axios from "axios";
import { Modal, Input, Button } from "antd";
import s from "./Modal.module.css";

const ModalEnter = () => {
  return (
    <div className={s.modal}>
      <h2 className='title'>Авторизация</h2>
      <p className={s.modal__text}>Войти через</p>
      <div className={s.modal__enter}>
        <img src='/assets/images/Footer/Group 735.svg' alt='' />
        <img src='/assets/images/Footer/Group 736.svg' alt='' />
      </div>
      <p className={s.modal__text}>Или</p>
      <Input type='email' placeholder='E-mail' required />
      <Input type='password' placeholder='Пароль' required />
      <Button hoverable>Войти</Button>
      <p className={s.modal__acc}>Забыли пароль?</p>
      <p className={s.modal__acc}>
        Еще не зарегестрированы? <span>Регистрация</span>
      </p>
    </div>
  );
};

const ModalRegistration = () => {
  let [value, setValue] = useState({
    name: "",
    email: "",
    nick: "",
    password: "",
    phone: "",
    repeat: "",
  });

  function handleChange(event) {
    setValue(event.target.value);
  }

  let phoneRef = null,
    nickRef = null,
    emailRef = null;

  async function sendDataRegistration() {
    let data = {
      'phone': phoneRef.state.value,
      'email': emailRef.state.value,
      'nick': nickRef.state.value,
	};
	
    try {
      await axios.post("https://sport.trex-studio.ru/api/user/registration", {
        data: JSON.stringify(data),
        processData: false,
        contentType: false,
      });
    } catch (e) {
      console.log("Error", e);
    }
  }

  return (
    <div className={s.modal}>
      <h2 className='title' style={{ textAlign: "center" }}>
        Регистрация
      </h2>
      <p className={s.modal__text}>Станьте частью команды уже сейчас!</p>
      <form
        action=''
        style={{ textAlign: "center" }}
        onSubmit={(e) => e.preventDefault()}>
        <Input
          type='tel'
          name='phone'
          ref={(ref) => (phoneRef = ref)}
          value={value.phone}
          placeholder='Номер телефона'
          required
          onChange={handleChange}
        />
        <Input
          type='text'
          name='name'
          value={value.name}
          placeholder='Имя, фамилия'
          onChange={handleChange}
        />
        <Input
          type='email'
          ref={(ref) => (emailRef = ref)}
          name='email'
          value={value.email}
          placeholder='E-mail'
          required
          onChange={handleChange}
        />
        <Input
          type='text'
          name='nick'
          ref={(ref) => (nickRef = ref)}
          value={value.nick}
          placeholder='Никнейм'
          required
          onChange={handleChange}
        />
        <Input
          type='password'
          name='password'
          placeholder='Пароль'
          value={value.password}
          onChange={handleChange}
        />
        <Input
          type='password'
          name='repeat'
          value={value.repeat}
          placeholder='Повторите пароль'
          onChange={handleChange}
        />
        <Button hoverable={true.toString()} onClick={sendDataRegistration}>
          Регистрация
        </Button>
      </form>
      <p className={s.modal__acc}>Уже есть аккаунт?</p>
    </div>
  );
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
    <Modal visible={visible} {...rest} footer={null}>
      {content()}
    </Modal>
  );
};

export default ModalCustom;
