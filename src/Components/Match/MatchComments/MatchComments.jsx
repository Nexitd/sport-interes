import React from "react";
import { Row, Col, Button } from "antd";
import s from "./MatchComments.module.css";

const CommentsInfo = [
  {
    id: 0,
    nickname: "Vladimir",
    date: `${new Date().getDay()}.${
      new Date().getDate() + 1
    }.${new Date().getFullYear()} в ${new Date().getHours()}:${new Date().getMinutes()}`,
    message:
      "Ставлю всё на Динамо, думаю в этот раз они точно выиграют поскольку у них новый тренер и после последнего их выхода они добились больших результатов на тренировках",
    like: <img src='/assets/images/Match/like.svg' alt='' />,
    avatar: <img src='/assets/images/Match/pers.png' alt='' />,
  },
  {
    id: 1,
    nickname: "Vladimir",
    date: `${new Date().getDay()}.${
      new Date().getDate() + 1
    }.${new Date().getFullYear()} в ${new Date().getHours()}:${new Date().getMinutes()}`,
    message:
      "Ставлю всё на Динамо, думаю в этот раз они точно выиграют поскольку у них новый тренер и после последнего их выхода они добились больших результатов на тренировках",
    like: <img src='/assets/images/Match/like.svg' alt='' />,
    avatar: <img src='/assets/images/Match/pers.png' alt='' />,
  },
  {
    id: 2,
    nickname: "Vladimir",
    date: `${new Date().getDay()}.${
      new Date().getMonth() + 1
    }.${new Date().getFullYear()} в ${new Date().getHours()}:${new Date().getMinutes()}`,
    message:
      "Ставлю всё на Динамо, думаю в этот раз они точно выиграют поскольку у них новый тренер и после последнего их выхода они добились больших результатов на тренировках",
    like: <img src='/assets/images/Match/like.svg' alt='' />,
    avatar: <img src='/assets/images/Match/pers.png' alt='' />,
  },
];

const MatchComments = ({ title }) => {
  return (
    <div>
      <h2 className='title'>{title}</h2>

      <Row gutter={[10, 10]}>
        <Col span={24}>
          <textarea name='' cols='30' rows='10' className={s.chat}></textarea>
          <Button shape='round' className={s.chat__send}>
            Отправить
          </Button>
        </Col>
        {CommentsInfo.map((info) => (
          <Col span={24}>
            <div className={s.card}>
              <div className={s.card__section}>{info.avatar}</div>
              <div className={s.card__section}>
                <span className={s.nick}>{info.nickname}</span>
                <span className={s.date}>{info.date}</span>
                <p className={s.message}>{info.message}</p>
                <div className={s.section}>
                  <span>Ответить</span>
                  <span>Поделиться</span>
                  <span>Пожаловаться</span>
                </div>
              </div>
              <div className={s.card__section}>
                <button className={s.like}>{info.like}</button>
                <button className={s.dislike}>{info.like}</button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MatchComments;
