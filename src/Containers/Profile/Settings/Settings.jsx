import React from "react";
import { Input, Button, Form } from "antd";
import Fetch from "../../../api/fetch";
import styles from "./Settings.module.css";

const Settings = () => {
  const edit = async (val) => {
    const upload = await Fetch.put("api/user/me", val);
    console.log(upload);
  };

  return (
    <div className={styles.settings}>
      <div className={styles.settings__cont}>
        <h2 className={styles.title}>Настройки профиля</h2>
        <Form onFinish={edit}>
          <Form.Item name="name">
            <Input type="text" placeholder="Введите имя" />
          </Form.Item>
          <Form.Item name="surname">
            <Input type="text" placeholder="Введите фамилию" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password placeholder="Новый пароль" />
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
      </div>
    </div>
  );
};

export default Settings;
