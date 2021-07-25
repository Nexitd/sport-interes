import React from "react";
import { Modal, Input, Button, Form, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login, registration } from "../../store/slices/auth";
import s from "./Modal.module.css";

const ModalEnter = ({ switchType }) => {
  const dispatch = useDispatch();
  const { errorLogin } = useSelector((state) => state.auth);

  const log = (val) => {
    dispatch(login(val));
  };

  return (
    <div className={s.modal}>
      <Typography.Title level={1}>Авторизация</Typography.Title>
      <Typography.Paragraph>Войти через</Typography.Paragraph>
      <div className={s.modal__enter}>
        <img src="/assets/images/Footer/Group 735.svg" alt="" />
        <img src="/assets/images/Footer/Group 736.svg" alt="" />
      </div>
      <Typography.Paragraph>Или</Typography.Paragraph>
      <Form onFinish={log}>
        <Form.Item
          name="email"
          validateStatus={errorLogin ? "error" : ""}
          rules={[{ required: true }]}
        >
          <Input type="email" className="inputRadius" placeholder="E-mail" />
        </Form.Item>
        <Form.Item
          name="password"
          validateStatus={errorLogin ? "error" : ""}
          rules={[{ required: true }]}
        >
          <Input.Password className="inputRadius" placeholder="Пароль" />
        </Form.Item>
        {errorLogin && (
          <Typography.Text type="danger" className={s.errorLogin}>
            Неверный логин или пароль
          </Typography.Text>
        )}
        <Button block shape="round" htmlType="submit">
          Войти
        </Button>
      </Form>
      <Typography.Paragraph>Забыли пароль?</Typography.Paragraph>
      <div>
        <span>Еще не зарегестрированы?</span>
        <Button
          type="link"
          onClick={() => switchType((state) => ({ ...state, type: "reg" }))}
        >
          Регистрация
        </Button>
      </div>
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
      <Typography.Title level={1}>Регистрация</Typography.Title>
      <Typography.Paragraph>
        Станьте частью команды уже сейчас!
      </Typography.Paragraph>
      <Form form={form} onFinish={registr}>
        <Form.Item name="phone" rules={[{ required: true }]}>
          <Input
            type="tel"
            className="inputRadius"
            placeholder="Номер телефона"
          />
        </Form.Item>
        <Form.Item name="name" rules={[{ required: true }]}>
          <Input className="inputRadius" placeholder="Имя, фамилия" />
        </Form.Item>
        <Form.Item name="email" rules={[{ required: true }]}>
          <Input className="inputRadius" type="email" placeholder="E-mail" />
        </Form.Item>
        <Form.Item name="username" rules={[{ required: true }]}>
          <Input className="inputRadius" placeholder="Никнейм" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true }]}>
          <Input.Password className="inputRadius" placeholder="Пароль" />
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
          <Input.Password
            className="inputRadius"
            placeholder="Повторите пароль"
          />
        </Form.Item>
        <Button block shape="round" htmlType="submit">
          Регистрация
        </Button>
      </Form>
      <Button
        className={s.modal__acc}
        type="link"
        onClick={() => switchType((state) => ({ ...state, type: "login" }))}
      >
        Уже есть аккаунт?
      </Button>
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
