import React from "react";
import { Row, Col } from "antd";
import s from "./MatchProtocol.module.css";

const ProtocolInfo = [
  {
    id: 0,
    name: "Иван Бахаров",
    firstCount: 0,
    secondCount: 1,
    number: "5'",
    scoring: 1,
    abuse: <span className={s.medium__abuse}></span>
  },
  {
    id: 1,
    name: "Иван Бахаров",
    firstCount: 0,
    secondCount: 1,
    number: "5'",
    scoring: 2,
    abuse: <span className={s.high__abuse}></span>
  },
  {
    id: 2,
    name: "Иван Бахаров",
    firstCount: 0,
    secondCount: 1,
    number: "5'",
    scoring: 2,
    abuse: <span className={s.medium__abuse}></span>
  },
  {
    id: 3,
    name: "Станислав Романенко",
    firstCount: 0,
    secondCount: 1,
    number: "5'",
    scoring: 1,
    abuse: <span className={s.medium__abuse}></span>
  },
];

const MatchProtocol = ({ title }) => {
  return (
    <div>
      <h2 className='title'>{title}</h2>

      <Row>
        <Col span={24}>
          <Row gutter={[10, 10]}>
            <Col span={12}>
              <h4 className='title' style={{ fontSize: 16, textAlign: 'center' }}>
                Голы
              </h4>
              {ProtocolInfo.map((info) => {
                let className;
                info.scoring === 1
                  ? (className = s.right__direction)
                  : (className = s.left__direction);

                return (
                  <div key={info.id} className={s.card + " " + className}>
                    <span className={s.name}>{info.name}</span>
                    <span className={s.count}>{info.firstCount}</span>
                    <span className={s.count}>{info.secondCount}</span>
                    <p className={s.number}>{info.number}</p>
                  </div>
                );
              })}
            </Col>
            <Col span={12}>
              <h4 className='title' style={{ fontSize: 16, textAlign: 'center' }}>
                Наказния
              </h4>

              {ProtocolInfo.map((info) => {
                let className;
                info.scoring === 1
                  ? (className = s.right__direction)
                  : (className = s.left__direction);

                return (
                  <div key={info.id} className={s.card + " " + className}>
                    <span className={s.name}>{info.name}</span>
                    {info.abuse}
                    <p className={s.number}>{info.number}</p>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default MatchProtocol;
