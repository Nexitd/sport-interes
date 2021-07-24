import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import s from "./GetMoney.module.css";

const GetMoney = () => {
  return (
    <div className={s.container}>
      <p className={s.text}>
        Для вывода средст необходимо указать сумму вывода. Средства будут
        отправлены на карту “Сбербанка”, прикрепленную к номеру, который Вы
        указали при регистрации.
      </p>
      <div className={s.wrapper}>
        <Form>
          <Form.Item name="sum">
            <Input placeholder="Сумма вывода, руб." />
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Согласитесь с условиямиы")),
              },
            ]}
          >
            <Checkbox>
              Я согласен с условиями вывода средства и обработку личных данных.
            </Checkbox>
          </Form.Item>
          <Button block shape="round" htmlType="submit">
            Вывести
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default GetMoney;
