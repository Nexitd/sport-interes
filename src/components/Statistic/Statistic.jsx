import React from "react";
import { Row, Col, Card } from "antd";
import classNames from "classnames";
import s from "./Statistic.module.css";

const infoStat = [
  {
    id: 0,
    title: "Футбол",
    img: <img src="/assets/images/Stat/Group 353.svg" alt="ico" />,
    data: (
      <span className={s.result}>
        <span className={s.score}>45</span>
        <span>/</span>
        <span className={s.total__score}>46</span>
      </span>
    ),
    color: "football",
  },
  {
    id: 1,
    title: "Хоккей",
    img: <img src="/assets/images/Stat/Group.svg" alt="ico" />,
    data: (
      <span className={s.result}>
        <span className={s.score}>45</span>
        <span>/</span>
        <span className={s.total__score}>46</span>
      </span>
    ),
    color: "hockey",
  },
  {
    id: 2,
    title: "Баскетбол",
    img: <img src="/assets/images/Stat/Group 80.svg" alt="ico" />,
    data: (
      <span className={s.result}>
        <span className={s.score}>45</span>
        <span>/</span>
        <span className={s.total__score}>46</span>
      </span>
    ),
    color: "basketball",
  },
];

const Statistic = () => {
  return (
    <Col span={24}>
      <h2 className={s.title}>Статистика</h2>
      <Row gutter={[10, 10]}>
        {infoStat.map((info) => (
          <Col span={8} key={info.id}>
            <Card>
              <div className={s.card__head}>
                {info.img}
                <h2 className={classNames([s.subtitle, [info.color]])}>
                  {info.title}
                </h2>
              </div>
              <div className={s.card__body}>
                <table>
                  <tr>
                    <td className={s.criteria}>Прогнозы</td>
                    <td>{info.data}</td>
                  </tr>
                  <tr>
                    <td className={s.criteria}>Точный счет</td>
                    <td>34</td>
                  </tr>
                  <tr>
                    <td className={s.criteria}>Исходы и разницы</td>
                    <td>27</td>
                  </tr>
                  <tr>
                    <td className={s.criteria}>Исходы</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td className={s.criteria}>Очки</td>
                    <td>78</td>
                  </tr>
                </table>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default Statistic;
