import React from "react";
import { Modal, Input, Button, Form, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login, registration } from "../../store/slices/auth";
import s from "./Modal.module.css";

const ModalEnter = ({ switchType }) => {
  const dispatch = useDispatch();
  const { errorLogin } = useSelector(state => state.auth);

  const log = (val) => {
    dispatch(login(val));
  };

  return (
    <div className={s.modal}>
      <h2 className="title">Авторизация</h2>
      <p className={s.modal__text}>Войти через</p>
      <div className={s.modal__enter}>
        <img src="/assets/images/Footer/Group 735.svg" alt="" />
        <img src="/assets/images/Footer/Group 736.svg" alt="" />
      </div>
      <p className={s.modal__text}>Или</p>
      <Form onFinish={log}>
        <Form.Item name="email" validateStatus={errorLogin ? "error" : ""} rules={[{ required: true }]}>
          <Input type="email" placeholder="E-mail" />
        </Form.Item>
        <Form.Item name="password" validateStatus={errorLogin ? "error" : ""} rules={[{ required: true }]}>
          <Input.Password placeholder="Пароль" />
        </Form.Item>
        {errorLogin && <Typography.Text type="danger" className={s.errorLogin}>Неверный логин или пароль</Typography.Text>}
        <Button htmlType="submit">Войти</Button>
      </Form>
      <p className={s.modal__acc}>Забыли пароль?</p>
      <p className={s.modal__acc}>
        Еще не зарегестрированы? <Button type="text" onClick={() => switchType(state => ({ ...state, type: "reg" }))}>Регистрация</Button>
      </p>
    </div>
  );
};

const ModalRegistration = ({ switchType }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const registr = (val) => {
    dispatch(registration(val));
  };

  return (
    <div className={s.modal}>
      <h2 className="title" style={{ textAlign: "center" }}>
        Регистрация
      </h2>
      <p className={s.modal__text}>Станьте частью команды уже сейчас!</p>
      <Form form={form} onFinish={registr}>
        <Form.Item name="phone" rules={[{ required: true }]}>
          <Input type="tel" placeholder="Номер телефона" />
        </Form.Item>
        <Form.Item name="name" rules={[{ required: true }]}>
          <Input placeholder="Имя, фамилия" />
        </Form.Item>
        <Form.Item name="email" rules={[{ required: true }]}>
          <Input type="email" placeholder="E-mail" />
        </Form.Item>
        <Form.Item name="username" rules={[{ required: true }]}>
          <Input placeholder="Никнейм" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true }]}>
          <Input.Password placeholder="Пароль" />
        </Form.Item>
        <Form.Item
          name="confirm"
          rules={[
            {
              required: true,
              message: "Введите повторный пароль!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Пароли не совпадают!"));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Повторите пароль" />
        </Form.Item>
        <Button htmlType="submit">Регистрация</Button>
      </Form>
      <Button className={s.modal__acc} onClick={() => switchType(state => ({ ...state, type: "login" }))}>Уже есть аккаунт?</Button>
    </div>
  );
};

const ModalRate = () => <div>Reg</div>;

const ModalCustom = ({ modal, switchType, ...rest }) => {
  const content = () => {
    switch (modal.type) {
      case "reg": {
        return <ModalRegistration switchType={switchType} />;
      }
      case "rate": {
        return <ModalRate />;
      }
      default: {
        return <ModalEnter switchType={switchType} />;
      }
    }
  };

  return (
    <Modal visible {...rest} footer={null}>
      {content()}
    </Modal>
  );
};

export default ModalCustom;
