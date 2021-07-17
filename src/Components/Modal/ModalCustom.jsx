import React from "react";
import { Modal, Input, Button, Form } from "antd";
import s from "./Modal.module.css";

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
      <Form>
        <Form.Item name="email">
          <Input type="email" placeholder="E-mail" />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password placeholder="Пароль" />
        </Form.Item>
        <Button htmlType="submit">Войти</Button>
      </Form>
      <p className={s.modal__acc}>Забыли пароль?</p>
      <p className={s.modal__acc}>
        Еще не зарегестрированы? <span>Регистрация</span>
      </p>
    </div>
  );
};

const ModalRegistration = () => {
  const [form] = Form.useForm();
  return (
    <div className={s.modal}>
      <h2 className="title" style={{ textAlign: "center" }}>
        Регистрация
      </h2>
      <p className={s.modal__text}>Станьте частью команды уже сейчас!</p>
      <Form form={form}>
        <Form.Item name="phone" rules={[{ required: true }]}>
          <Input type="tel" placeholder="Номер телефона" />
        </Form.Item>
        <Form.Item name="name" rules={[{ required: true }]}>
          <Input placeholder="Имя, фамилия" />
        </Form.Item>
        <Form.Item name="email" rules={[{ required: true }]}>
          <Input type="email" placeholder="E-mail" />
        </Form.Item>
        <Form.Item name="nick" rules={[{ required: true }]}>
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
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Повторите пароль" />
        </Form.Item>
        <Button htmlType="submit">Регистрация</Button>
      </Form>
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
