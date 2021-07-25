import React from "react";
import { Button, Card, Checkbox, Form, Input, Row, Typography } from "antd";

const GetMoney = () => {
  return (
    <Card>
      <Typography.Paragraph>
        Для вывода средст необходимо указать сумму вывода. Средства будут
        отправлены на карту “Сбербанка”, прикрепленную к номеру, который Вы
        указали при регистрации.
      </Typography.Paragraph>
      <Row justify="center">
        <Form>
          <Form.Item name="sum">
            <Input className="inputRadius" placeholder="Сумма вывода, руб." />
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
      </Row>
    </Card>
  );
};

export default GetMoney;
