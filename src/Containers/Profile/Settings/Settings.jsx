import React from "react";
import { Input, Button, Form, Typography, Card } from "antd";
import Fetch from "../../../api/fetch";

const Settings = () => {
  const edit = async (val) => {
    const upload = await Fetch.put("api/user/me", val);
    console.log(upload);
  };

  return (
    <Card>
      <Typography.Title level={2} style={{ textAlign: "center" }}>
        Настройки профиля
      </Typography.Title>
      <Form onFinish={edit}>
        <Form.Item name="name">
          <Input className="inputRadius" placeholder="Введите имя" />
        </Form.Item>
        <Form.Item name="surname">
          <Input className="inputRadius" placeholder="Введите фамилию" />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password className="inputRadius" placeholder="Новый пароль" />
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
        <Button
          block
          type="primary"
          size="large"
          shape="round"
          htmlType="submit"
        >
          Изменить
        </Button>
      </Form>
    </Card>
  );
};

export default Settings;
